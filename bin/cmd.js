#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var minimist = require('minimist')
var { Level } = require('level')

var argv = minimist(process.argv.slice(2))
var HOME = process.env.HOME
var dbDir = path.join(HOME, 'todo.db')
mkdirp.sync(dbDir)

async function main () {
  var db = new Level(dbDir)
  var todo = require('../index')

  function printUsage () {
    fs.createReadStream(__dirname + '/../usage.md')
      .pipe(process.stdout)
  }

  var name = argv._[1]
  var value = argv._[2]
  if (argv.h) {
    printUsage()
  } else if (argv._[0] === 'add') {
    await todo.add(db, name, value)
  } else if (argv._[0] === 'get') {
    await todo.get(db, name)
  } else if (argv._[0] === 'rm' || argv._[0] === 'done') {
    await todo.del(db, name)
  } else if (argv._[0] === 'list') {
    await todo.list(db)
  } else if (argv._[0] === 'destroy') {
    await db.close()
    await Level.destroy(dbDir)
    console.log('todo list database destroied!')
  } else {
    printUsage()
  }

  await db.close()
}

main().catch(function (err) {
  console.error('Ooops!', err)
  process.exit(1)
})
