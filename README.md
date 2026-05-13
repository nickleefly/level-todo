# level-todo
[![Build Status](https://travis-ci.org/nickleefly/level-todo.svg?branch=master)](https://travis-ci.org/nickleefly/level-todo)

A todo list CLI using LevelDB

## Install

```
npm install -g level-todo
```

## Example

```
todo add "read book" "erta by Kafka"
todo add read https://www.npmjs.com
```

## Usage

```
todo add name value     Add a new item
todo get name           Get an item
todo rm/done name       Mark as done and remove
todo list               Show all items
todo destroy            Clear all items
```

## License

MIT
