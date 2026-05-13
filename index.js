var todo = exports
var util = require('util')

todo.add = async function (db, name, value) {
  try {
    await db.put(name, value)
  } catch (err) {
    console.log('Ooops!', err)
  }
}

todo.get = async function (db, name) {
  try {
    var value = await db.get(name)
    console.log(util.format('value for %s: %s', name, value))
  } catch (err) {
    console.log('Ooops, no given key founded')
  }
}

todo.del = async function (db, name) {
  try {
    await db.del(name)
    console.log('key "' + name + '" is finished')
  } catch (err) {
    console.log('Ooops!', err)
  }
}

todo.list = async function (db) {
  try {
    var it = db.iterator()
    var entry = await it.next()
    while (entry !== undefined) {
      console.log(util.format('value for %s: %s', entry[0], entry[1]))
      entry = await it.next()
    }
  } catch (err) {
    console.log('Ooops!', err)
  }
}
