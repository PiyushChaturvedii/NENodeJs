// First API with HTTP module.
var http = require('http');
var data = [
    {name:"anil",age:"25",email:"anil@gmail.com"},
    {name:"sunil",age:"45",email:"sunil@gmail.com"},
    {name:"peter",age:"55",email:"peter@gmail.com"},
    {name:"mohan",age:"65",email:"mohan@gmail.com"},

];



http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900);


