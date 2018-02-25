import http from 'http';
import parseurl from 'parseurl';
import { API_PORT } from '../common/constants/app-config';

console.log('API_PORT', API_PORT);

http.createServer((req, res) => {
  const url = parseurl(req);

  res.statusCode = 204;
  res.end();
}).listen(API_PORT, () => console.log('Node.js server listening on port', API_PORT));
