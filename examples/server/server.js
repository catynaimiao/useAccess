const port = 3000;
const baseurl = "http://localhost:" + port;

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./dev-server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on ${baseurl}`);
});
