import * as mysql from 'mysql2/promise';
import { SQLStatement } from 'sql-template-strings';

let poolConfig = {
  host: '127.0.0.1',
  database: 'next_js_mysql',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  charset: 'utf8mb4_bin',
  waitForConnections: true,
  connectionLimit: 3,
};

class DB {
  pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool(poolConfig);
  }

  do = async (query: SQLStatement) => {
    try {
      const connection = await this.pool.getConnection();
      const [rows, fields] = await connection.query(query);
      connection.release();
      return rows;
    } catch (error) {
      return { error }
    }
  }
}

export default new DB();
