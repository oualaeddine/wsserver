const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 7071});
const clients = new Map();

wss.on('connection', (ws) => {

    //  clients.set(ws, metadata);
    wss.broadcast("hi");

    ws.on('message', (messageAsString) => {
        const metadata = clients.get(ws);
        if (messageAsString == "hello")
            wss.broadcast(message);
    });
});

wss.broadcast = function broadcast(msg) {
    console.log(msg);
    wss.clients.forEach(function each(client) {
        client.send(msg);
    });
};
wss.on("close", () => {
    clients.delete(ws);
});
console.log("wss up");


