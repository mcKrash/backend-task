const { WebSocket } = require('ws')

const ws = new WebSocket('ws://localhost:8080')


ws.on('connection', () => {
    console.log('conntected to the web socket')
})



ws.on('message', (beat) => {
    setTimeout(() => {
        let date = new Date().toISOString();
        ws.send('heartbeat ==> ' + date.toString())
    }, 1000);

})

ws.on('error', (error) => {
    console.log(error)
})

ws.on('close', (data) => {
    console.log('disconnected')
    ws.send('client is disconnected')
})