console.log("Welcome to Nodejs");
var os = require("os");

var cpu = os.cpus.length;
var freeM = os.freemem();
var uptime = os.uptime();
console.log(cpu, freeM, uptime);

// Buffer

let buff1 = Buffer.alloc();
let buff2 = Buffer.allocUnsafe(12);
buff1.write("Hello");
console.log(buff1.toString());

var { readFile, readFileSync, unlink } = require("fs");

var sync = readFileSync("./app.js");

readFile("./app.js", (err, content) => {
  console.log(err, content);
});
