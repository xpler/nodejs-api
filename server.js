const http = require(process.env.PROTOCOL || "http");
const api = require("./api");
const port = process.env.PORT || 3000;
const server = http.createServer(api);

server.listen(port);
console.log("Node: Server is spinning...");
