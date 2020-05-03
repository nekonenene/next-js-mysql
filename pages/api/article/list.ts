import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../lib/db';
import SQL from 'sql-template-strings';

export default (_: NextApiRequest, res: NextApiResponse) => {
  const listArticles = async () => {
    return await DB.do(SQL`
      SELECT *
      FROM article
      ORDER BY id
    `)
  }

  listArticles()
    .then(articles => res.status(200).json({ articles: articles }))
    .catch(() => res.status(500).json({ error: '500: Exception caught' }));
}
