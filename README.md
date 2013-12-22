apx-mongoose [![Build Status](https://travis-ci.org/snailjs/apx-mongoose.png?branch=0.3.0)](https://travis-ci.org/snailjs/apx-mongoose)
============

Mongoose initializer for APX API server

## Usage

Simply add the initializer to the Apx config.

```
$ npm install apx apx-mongoose
```

```js
var apx = require('apx')
apx.setup({
  initializers: [require('apx-mongoose')],
  mongoose: {name: 'my-database', models: ['models/*.js']}
})
apx.stat()
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

### 0.4.0
* Upgraded to work with apx 0.4.0

### 0.3.1
* Updated to work with apx 0.3.0
* Improved async handling for the apx 0.3.0 async init stack

### 0.3.0
* Updated to work with apx 0.2.0

### 0.2.0
* Changed config prefix to mongoose.*

### 0.1.0
* Initial release
