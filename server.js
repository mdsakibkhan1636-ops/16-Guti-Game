const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('একজন খেলোয়াড় যুক্ত হয়েছে');
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`সার্ভার চলছে ${PORT} পোর্টে`);
});
