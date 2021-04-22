var http = require('http');
http.createServer(function (req,res) {
    res.write("Hello from nodejs server");
    res.end();
}).listen(3900);




function otherfun(add) {
    console.warn(add(200, 300))
}
otherfun(function (a, b) {
    return a + b;
})