const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var pass = "thepassword";

var hash = SHA256(pass).toString();

console.log(`pass: ${hash}`);