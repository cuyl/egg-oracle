'use strict';

const assert = require('assert');
const oracledb = require('oracledb');
let count = 0;

module.exports = app => {
  app.addSingleton('oracle', createOneClient);
};
/**
 * Creates a database managed connection pool.
 * @param {Object} config app.config.oracle
 * @param {egg.EggApplication} app EggApplication
 * @return {oracledb.IConnectionPool} pool
 */
async function createOneClient(config, app) {
  assert(config.user && config.password && config.connectString,
    `[egg-oracle] '${config.connectString}', 'user: ${config.user}' are required on config`);
  app.coreLogger.info('[egg-oracle] connecting %s', config.connectString);
  const pool = await oracledb.createPool(config);
  const conn = await pool.getConnection();
  const { rows } = await conn.execute("select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') from dual", []);
  await conn.close();
  const index = count++;
  app.coreLogger.info(`[egg-oracle] instance[${index}] status OK, currentTime: ${rows[0][0]}`);

  return pool;
}
