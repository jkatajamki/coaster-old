import http from 'http';
import parseurl from 'parseurl';

const server = http.createServer((req, res) => {
  const url = parseurl(req);

  res.statusCode = 200;
  const message = `We live... ${ JSON.stringify(url) }`;
  res.end(message);
});

export default server;
