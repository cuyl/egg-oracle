'use strict';

class Connection {
  constructor(connection, log) {
    this._connection = connection;
    this.log = log;
  }
  async execute(sql, bindParams = {}, options = { outFormat: 4002 }) {
    if (typeof sql === 'string' && bindParams instanceof Object) {
      try {
        const result = await this._connection.execute(sql, bindParams, options);
        return result;
      } catch (err) {
        this.log.error(err.message);
        const error = await this.close();
        if (error) {
          throw error;
        }
        throw err;
      }
    }
  }

  async rollback() {
    return this._connection.rollback();
  }
  async commit() {
    return this._connection.commit();
  }
  async close() {
    return this._connection.close();
  }
}
module.exports = Connection;
