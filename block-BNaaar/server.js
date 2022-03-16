var http = require("http");
var server = http.createServer(handleReq);

function handleReq(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> This is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.end("This is a post request");
  } else {
    res.setHeader(404, { "Content-Type": "application/json" });
    res.end(`{message: this is a post request}`);
  }
}

server.listen(5000, () => {
  console.log("Server has started at 5K");
});
