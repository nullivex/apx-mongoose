apx-mongoose
============

Mongoose initializer for APX API server

## Usage

Simply add the initializer to the Apx config.

```
$ npm install apx apx-mongoose
```

```js
var Apx = require('apx')
var inst = new Apx({
  initializers: [require('apx-mongoose')],
  db: {name: 'my-database'}
})
```

## Configuration

### Host
* Variable `db.host`
* Required **no**
* Default `127.0.0.1`

Hostname ot connect to MongoDB

### Name
* Variable `db.name`
* Required **yes**

Name of database to use

### User
* Variable `db.user`
* Required **no**
* Default `''`

Username to connect to MongoDB

### Password
* Variable `db.password`
* Require **no**
* Default `''`

Password to connect to MongoDB