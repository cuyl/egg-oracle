'use strict';

const oracledb = require('oracledb');

class OracleDB {
  constructor(config) {
    this.config = config;
  }

  async init() {
    this.pool = await oracledb.createPool(this.config);
    return await this.getConnection();
  }

  /**
   * This method obtains a connection from the connection pool.
   * If a previously opened connection is available in the pool, that connection is returned. If all connections in the pool are in use, a new connection is created and returned to the caller, as long as the number of connections does not exceed the specified maximum for the pool. If the pool is at its maximum limit, the getConnection() call results in an error, such as ORA-24418: Cannot open further sessions.
   * @return {connection}  An IConnection Promise to when the connection is available or when some error occurs.
   * @see {@link https://jsao.io/2015/03/making-a-wrapper-module-for-the-node-js-driver-for-oracle-database/}
   * @see {@link https://github.com/OraOpenSource/orawrap}
   */
  async getConnection() {
    if (this.connection) {
      this.connection.close();
    }
    this.connection = await this.pool.getConnection();
    return this.connection;
  }

  /**
   * This call executes a SQL or PL/SQL statement. See SQL Execution for examples.
   * The statement to be executed may contain IN binds, OUT or IN OUT bind values or variables, which are bound using either an object or an array.
   * @param	 {string} sql SQL Statement.
   * @param	 {Object|Array<any>} bindParams Binds Object/Array
   * @param	 {IExecuteOptions} options Options object
   * @return {ResultObject}	result object, containing any fetched rows, the values of any OUT and IN OUT bind variables, and the number of rows affected by the execution of DML statements.
   */
  async execute(sql, bindParams, options) {
    if (typeof sql === 'string' && bindParams instanceof Object) {
      return await this.connection.execute(sql, bindParams, options);
    }
  }

  close() {
    this.connection.close();
  }
}

module.exports = OracleDB;
