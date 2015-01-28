#!/usr/bin/env node                                                                                                               [0/684]
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var minimist = require('minimist')
var levelup = require('levelup')
 
var argv = minimist(process.argv.slice(2))
var HOME = process.env.HOME
var dbDir = argv.d || path.join(HOME, 'todo.db')
mkdirp.sync(dbDir)
 
var db = levelup(dbDir, { encoding: 'json' })
var todo = require('../index')
 
function printUsage() {
  fs.createReadStream(__dirname + '/usage.md')
  .pipe(process.stdout)
}
 
var name = argv._[1]
var value = argv._[2]
if (argv.h) {
  printUsage()
} else if (argv._[0] === 'add') {
  todo.add(db, name, value)
} else if (argv._[0] === 'get') {
  todo.get(db, name)
} else if (argv._[0] === 'rm' || argv._[0] === 'done') {
  todo.del(db, name)
} else if (argv._[0] === 'list') {
  todo.list(db)
} else if (argv._[0] === 'destroy') {
  db.close(function () {
    require('leveldown').destroy(dbDir, function (err) {
      console.log('todo list database destroied!')
    })
  })
} else {
  printUsage()
}
