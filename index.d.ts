/// <reference types="oracledb" />
/// <reference types="egg" />
import { IExecuteOptions, IExecuteReturn, IPoolAttributes, IConnection, IPromise } from 'oracledb';

interface OracleDB {
  config: any;
  getConnection(): Promise<OracleConnection>;
  execute(sql: string, bindParams: Object|Array<any>, options: IExecuteOptions): Promise<IExecuteReturn>;
  close(): Promise<void>;
  destroy(): Promise<void>;
}

interface OracleConnection {
  /**
   * orabledb Connection
   */
  _connection: IConnection;
  execute(sql: string, bindParams: Object|Array<any>, options: IExecuteOptions): Promise<IExecuteReturn>;
  rollback(): IPromise<void>;
  commit(): IPromise<void>;
  close(): IPromise<void>;
}

interface ClientConfig {
  user: string;
  password: string;
  connectString: string;
}

interface SingleOracleConfig {
  client: ClientConfig;
  app: Boolean;
  agent: Boolean;
}

interface MultiOracleConfig {
  clients: {
    [key:string]: ClientConfig;
  };
  app: Boolean;
  agent: Boolean;
}

declare module 'egg' {
  interface Application {
    oracle: Singleton<OracleDB> | OracleDB;
  }
  interface Singleton<T> {
    get(id: string): T;
  }
  interface EggAppConfig {
    oracle: SingleOracleConfig | MultiOracleConfig;
  }
}