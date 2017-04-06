'use strict';

module.exports = app => {
  console.log('app.config.env =', app.config.env);
  if (app.config.oracle.app) require('./lib/loader')(app);
};
