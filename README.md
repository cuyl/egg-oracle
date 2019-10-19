# egg-oracle

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-oracle.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-oracle
[david-image]: https://img.shields.io/david/cuyl/egg-oracle.svg?style=flat-square
[david-url]: https://david-dm.org/cuyl/egg-oracle
[snyk-image]: https://snyk.io/test/npm/egg-oracle/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-oracle
[download-image]: https://img.shields.io/npm/dm/egg-oracle.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-oracle

## Install

See [Quick Start Node-oracledb Installation](https://github.com/oracle/node-oracledb/blob/master/INSTALL.md#quickstart).


```bash
$ npm i egg-oracle --save
```

## Usage

* enable plugin

```js
// {app_root}/config/plugin.js
exports.oracle = {
  enable: true,
  package: 'egg-oracle',
};
```
* oracle connection pool attach in app

```js
// {app_root}/app/service/my_service.js
'use strict';
const Service = require('egg').Service;

class MyService extends Service {
  // example for getConnection
  async foo() {
    const connection = await this.app.oracle.getConnection();
    const result = await connnection.execute('SELECT sysdate AS "date" FROM dual');
    connection.close();
    console.log(result.rows[0].date);
  }
}
module.exports = MyService;

```

## <a name="doc"></a> Documentation

See [Documentation for the Oracle Database Node.js Add-on](https://github.com/oracle/node-oracledb/blob/master/doc/api.md).

## Configuration

```js
// {app_root}/config/config.default.js
exports.oracle = {
  client: {
    user: 'user',
    password: 'password',
    connectString: 'localhost/orcl',
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## License

[MIT](LICENSE)
