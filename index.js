var todo = exports
var util = require('util')

todo.add = function (db, name, value) {
  db.put(name, value, function (err) {
    if (err) return console.log('Ooops!', err)
  })
}

todo.get = function (db, name) {
  db.get(name, function (err, value) {
    if (err) return console.log('Ooops, no given key founded')
    console.log(util.format('value for %s: %s', name, value))
  })
}

todo.del = function (db, name) {
  db.del(name, function (err) {
    if (err) return console.log('Ooops!', err)
    console.log('key \"' + name + '\" is finished')
  })
}

todo.list = function (db) {
  db.createReadStream()
    .on('data', function (data) {
      console.log(util.format('value for %s: %s', data.key, data.value))
    })
}
