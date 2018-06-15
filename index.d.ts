/// <reference types="oracledb" />
/// <reference types="egg" />
import { IConnectionPool } from 'oracledb';

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
    oracle: Singleton<IConnectionPool> | IConnectionPool;
  }
  interface Singleton<T> {
    get(id: string): T;
  }
  interface EggAppConfig {
    oracle: SingleOracleConfig | MultiOracleConfig;
  }
}