var http = require(`http`);

var server = http.createServer(handleReq);

function handleReq(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end("Welcome");
}

server.listen(3000, () => {
  console.log("Server has been started on 3000");
});
