// First API with HTTP module

var http = require('http');
var data = { name: "anil", age: "20", email:"anil@gmail.com" };
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end()
}).listen(3900)