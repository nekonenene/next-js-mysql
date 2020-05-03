import * as mysql from 'mysql2/promise';
import { SQLStatement } from 'sql-template-strings';

let poolConfig = {
  connectionLimit: 3,
  host: '127.0.0.1',
  database: 'next_js_mysql',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
};

export default class DB {
  static do = async (query: SQLStatement) => {
    try {
      const pool = mysql.createPool(poolConfig);
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.query(query);
      connection.release();
      return rows;
    } catch (error) {
      return { error }
    }
  }
}
