const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 });
console.log('server is running')


wss.on('connection', function connection(ws) {
    console.log('New Client with ID :' + Date.now())
    ws.send('welcome client')


    ws.on('message', function message(data) {
        console.log('received: %s', data);
        ws.send('message deliverd :' + data)

        function heartbeat(beat) {
            console.log('received: %s', beat);
            ws.send('beat deliverd' + beat)
        };
    });

    ws.on('error', (error) => {
        console.log('Connection Error')
        ws.send(error)
    })

    ws.on('close', (data) => {
        ws.removeAllListeners();
        ws.close()
        console.log('connection closed')
    })
});