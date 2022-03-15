var { readFile, readFileSync } = require("fs");

readFile("./content.md", `utf8`, (err, content) => {
  console.log(content);
});

var result = readFileSync("./content.md", `utf8`);

var buff1 = Buffer.alloc(10);

buff1.write("Welcome World");
console.log(buff1.toString());
