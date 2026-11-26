const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // socket.send(`Echo: ${message}`);
        wss.clients.forEach((client) => {
            client.send(`Broadcast: ${message}`);
        });
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    });
});