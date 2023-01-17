//the url splits web address into more useable peices.
//the require() method is used to include url modules.

var URL = require('url');
//the address being used in this example
var adr = 'http://localhost:3000/example.htm?example=ThisIsExample';
//using the parse method to split the url into properties
var q = URL.parse(adr, true);

//printing the url host
console.log(q.host);
//printing the url pathname
console.log(q.pathname);
//printing the url search
console.log(q.search);