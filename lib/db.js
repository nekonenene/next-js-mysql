const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: '127.0.0.1',
    database: 'next_js_mysql',
    user: 'root',
    password: process.env.MYSQL_PASSWORD
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}
