

const http = require("http");
const io = require("socket.io");

//1.先创建一个http服务
let server = http.createServer();
server.listen(5050);


//2.创建一个websocket链接
let websocket = io.listen(server);
websocket.on("connection", function (sock) {
    // sock.on("a", function (num1, num2) {
    //     console.log(`接收到了数据${num1},${num2}`)
    // })
    setInterval(function(){
    sock.emit("a",Math.random());
    })
});