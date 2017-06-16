# egg-oracle

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-oracle.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-oracle
[travis-image]: https://img.shields.io/travis/cuyl/egg-oracle.svg?style=flat-square
[travis-url]: https://travis-ci.org/cuyl/egg-oracle
[codecov-image]: https://img.shields.io/codecov/c/github/cuyl/egg-oracle.svg?style=flat-square
[codecov-url]: https://codecov.io/github/cuyl/egg-oracle?branch=master
[david-image]: https://img.shields.io/david/cuyl/egg-oracle.svg?style=flat-square
[david-url]: https://david-dm.org/cuyl/egg-oracle
[snyk-image]: https://snyk.io/test/npm/egg-oracle/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-oracle
[download-image]: https://img.shields.io/npm/dm/egg-oracle.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-oracle

## Install

```bash
$ npm i egg-oracle --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.oracle = {
  enable: true,
  package: 'egg-oracle',
};
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
