# level-todo [ ![Codeship Status fora

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
