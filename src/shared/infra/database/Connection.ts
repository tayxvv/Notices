const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
import pgPromise, { IDatabase } from 'pg-promise';

interface IDbConfig {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}

interface QueryParams {
    param1: string;
    param2: number;
}

const dbConfig: IDbConfig = {
  host: process.env.PGHOST,
  port: 5432,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
};

const pgp = pgPromise();

class Connection {

  public db: IDatabase<unknown>;

  constructor() {
    this.db = pgp(dbConfig);
  }
  
  async query<T>(sql: string, params?: QueryParams): Promise<T[]> {
    try {
      const result = await this.db.query(sql, params);
      return result;
    } catch (error) {
      throw new Error(`Erro na consulta SQL: ${error.message}`);
    }
  }

  async close() {
    await this.db.$pool.end();
  }
}

export { Connection };  