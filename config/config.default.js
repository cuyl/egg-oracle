'use strict';

/**
 * oracle default config
 * @member Config#oracle
 * @property {String} SOME_KEY - some description
 */
exports.oracle = {
  default: {
    user: 'root',
    password: '',
    connectString: 'localhost/orcl',
  },
  app: true,
  agent: false,

  // Single Database
  // client: {
  //   user: 'user',
  //   password: 'password',
  //   connectString: 'localhost/orcl',
  // },

  // Multi Databases
  // clients: {
  //   db1: {
  //     user: 'user',
  //     password: 'password',
  //     connectString: 'localhost/orcl',
  //   },
  //   db2: {
  //     user: 'user',
  //     password: 'password',
  //     connectString: 'localhost/orcl',
  //   },
  // },
};
