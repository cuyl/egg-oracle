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

> Prerequisites:
> 
> - [Python 2.7](https://www.python.org/downloads/)
> - C Compiler with support for C++ 11 (Xcode, gcc, Visual Studio or similar)
> - Oracle 11.2, 12.1 or 12.2 client libraries.  Use the small, free [Oracle Instant Client](http://www.oracle.com/technetwork/database/features/instant-client/index-100365.html) "basic" and "SDK" packages if your database is remote.  Or use the libraries and headers from a locally installed database such as the free [Oracle XE](http://www.oracle.com/technetwork/database/database-technologies/express-edition/overview/index.html) release.
> 
> Oracle's standard client-server network compatibility applies: Oracle Client 12.2 can connect to Oracle Database 11.2 or greater. Oracle Client 12.1 can connect to Oracle Database 10.2 or greater. Oracle Client 11.2 can connect to Oracle Database 9.2 or greater.
> - Set `OCI_LIB_DIR` and `OCI_INC_DIR` during installation if the Oracle libraries and headers are in  non-default location
> 
> See [INSTALL](https://github.com/oracle/node-oracledb/tree/master/INSTALL.md) for details.


```bash
$ npm i egg-oracle --save
```

## Usage

* open plugin 

```js
// {app_root}/config/plugin.js
exports.oracle = {
  enable: true,
  package: 'egg-oracle',
};
```
* oracle attach in app

```js
// {app_root}/app/service/my_service.js
'use strict';

module.exports = app => {
  class MyService extends app.Service {
    // example for getConnection
    async foo() {
      const connection = await app.oracle.getConnection();
      const result = await connnection.execute('SELECT sysdate AS "date" FROM dual');
      connection.close();
      console.log(sesult.rows[0].date);
    }
    // it work
    async foo2() {
      const result = await app.oracle.execute('SELECT sysdate AS "date" FROM dual');
      connection.close();
      console.log(sesult.rows[0].date);
    }
  }
  return MyService;
}
```
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
