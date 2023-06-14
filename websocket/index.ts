import express, { Application } from "express";
import { WebSocketServer } from "ws";

const app: Application = express();
const ws = new WebSocketServer({port: 3000});

ws.on('connection', (socket) => {
     console.log(socket);

     socket.send(JSON.stringify({
          content: "asdf"
     }));

     socket.on('message', (message) => {

     });
});

app.listen(3030, () => {
     console.log("server running");
});