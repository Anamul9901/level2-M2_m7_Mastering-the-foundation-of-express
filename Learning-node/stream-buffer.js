const http = require("http");
const fs = require("fs");

//creating a server using raw node.js
const server = http.createServer();

//listener
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  //streaming file reading
  const readableStream = fs.createReadStream(__dirname + "/texts/read.txt");

  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("Hello from world!");
  });

  //   console.log(req.url, req.method);
});

server.listen(3000, () => {
  console.log(`server is listening on port 3000`);
});
