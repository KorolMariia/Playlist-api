const jsonServer = require('json-server');
const path = require('path');
const dbJSFile = require(path.join(__dirname, 'data', 'songs'));
const dbJSFileShops = require(path.join(__dirname, 'data', 'shops'));

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);

server.listen(port, () => {
  console.log('JSON Server is running: ', port);
});

server.get('/songs', (req, res) => {
  const songs = dbJSFile();
  res.json(songs);
});

server.get('/shops', (req, res) => {
  const shops = dbJSFileShops();
  res.json(shops);
});