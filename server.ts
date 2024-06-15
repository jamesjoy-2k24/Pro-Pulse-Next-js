import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Hello Joy!' });
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  const PORT = 3000;
  server.listen(PORT, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
