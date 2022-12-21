const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/users") {
    if (request.method === "GET") {
      return response.end("Aplicação está no ar");
    }
  }
});

server.listen(3333, () => console.log("Server is running on PORT 3333"));
