# level-todo [ ![Codeship Status for nickleefly/level-todo](https://codeship.com/projects/deb71b40-919c-0132-3ac4-76ae55305aa6/status?branch=master)](https://codeship.com/projects/61721)
[![Build Status](https://travis-ci.org/nickleefly/level-todo.svg?branch=master)](https://travis-ci.org/nickleefly/level-todo) [![Greenkeeper badge](https://badges.greenkeeper.io/nickleefly/level-todo.svg)](https://greenkeeper.io/)

A todo list using leveldb

# example

To add a new list

```
level-todo add "this is a name" "this is a value"
```

or

```
level-todo add read https://www.npmjs.com
```

# Install

`npm install -g level-todo`

# Usage

```
usage:

  level-todo add name value
  Add a new list.

  level-todo get name
  Get a list

  level-todo rm/done name
  Mark a list as done and remove it by the given name.

  level-todo list
  Show all the todo list

  level-todo destroy
  Clear all the list.
```
# License

MIT
