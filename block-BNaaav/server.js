var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.setHeader("Content-Type", "text/html");
  fs.createReadStream("./index.html").pipe(res);
  // check for css requests using url
  if (req.url.split(".").pop() === "css") {
    // set header for css file
    res.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile("./stylesheets/" + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(5000);
