import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../lib/db';
import SQL from 'sql-template-strings';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST' && req.headers["content-type"] == 'application/json') {
    const request = req.body;

    const createArticle = async () => {
      return await DB.do(SQL`
        INSERT INTO article
        (title, body, createdAt, updatedAt) VALUES
        (${request.title}, ${request.body}, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
      `)
    }

    if (!request.title || !request.body) {
      return res.status(400).json({ error: '400: Missing parameter' });
    }

    if (request.title.length > 100) {
      return res.status(400).json({ error: '400: title length must be lower than 100 chars' });
    }

    createArticle()
      .then(article => res.status(200).json({ article: { id: article['insertId'], title: request.title, body: request.body } }))
      .catch(() => res.status(500).json({ error: '500: Exception caught' }));
  }
}
