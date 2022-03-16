console.log("Welcome to Nodejs");
var os = require("os");

var cpu = os.cpus.length;
var freeM = os.freemem.length;
var uptime = os.uptime;
var version = os.version;
console.log(cpu, freeM, uptime, version);

// Buffer

let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);
console.log(buff1.toString());

var url = require(`https://airindia.com/fares/calculate?from=delhi&to=detroit`);
var parsedUrl = url.parse();
console.log(parsedUrl);
