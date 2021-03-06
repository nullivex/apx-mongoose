APX Mongoose
============

## Kado

STOP AND READ THIS

APX or Apex is no longer maintained and is superseded by Kado.

A new package is available to handle all your JavaScript needs.
See [kado.org](https://kado.org) for details.

## Summary

Mongoose initializer for APX API server

## Usage

Simply add the initializer to the Apx config.

```
$ npm install apx apx-mongoose
```

```js
var apx = require('apx')
apx.start({
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

Can be an array of globs or an array of paths or a single path
or even an array of objects.

## Models

Models are loaded directly from the APX models config value `models`.

### Model Format

The model format follows the basic construction of models from mongoose and other NOSQL databases.

```js
exports.name = 'modelName'
exports.description = 'Model Description'
exports.schema = MongooseSchema
exports.model = MongooseModel
```

## Changelog

## 0.5.1
Upgraded to APX 0.7.0 (no other changes)

### 0.5.0
* Model format upgraded to include schema and be more intuitive
* Apx now carries the entire plugin when loaded

### 0.4.0
* Upgraded to work with apx 0.4.0
* Models now read directly from apx

### 0.3.1
* Updated to work with apx 0.3.0
* Improved async handling for the apx 0.3.0 async init stack

### 0.3.0
* Updated to work with apx 0.2.0

### 0.2.0
* Changed config prefix to mongoose.*

### 0.1.0
* Initial release
