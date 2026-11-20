const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 3000 });

wsServer.on('connection', (socket) => {
  console.log('Client connected');