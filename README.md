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
  mongoose: {name: 'my-database', models: ['models/*.js']}
})
```

## Configuration

### Host
* Variable `mongoose.host`
* Required **no**
* Default `127.0.0.1`

Hostname ot connect to MongoDB

### Name
* Variable `mongoose.name`
* Required **yes**

Name of database to use

### User
* Variable `mongoose.user`
* Required **no**
* Default `''`

Username to connect to MongoDB

### Password
* Variable `mongoose.password`
* Required **no**
* Default `''`

Password to connect to MongoDB

### Models
* Variable `mongoose.models`
* Required **no**

Model files to load at boot time.

Can be an array of globs or an array of paths or a single path
or even an array of objects.

## Changelog

### 0.3.0
* Updated to work with apx 0.2.0

### 0.2.0
* Changed config prefix to mongoose.*

### 0.1.0
* Initial release