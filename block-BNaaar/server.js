var http = require("http");
var server = http.createServer(handleReq);

function handleReq(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> This is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.end("This is a post request");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page Not Found</h2>");
  }
}

server.listen(5000, () => {
  console.log("Server has started at 5K");
});
