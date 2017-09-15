'use script';
const crypto=require("crypto");
const hash=crypto.createHash("md5");
console.log(hash.digest("yang"))