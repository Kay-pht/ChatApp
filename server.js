const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chat", (msg) => {
    // console.log("Received message: ", msg);
    io.emit("chat", msg);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
