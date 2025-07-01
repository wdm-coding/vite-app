const express = require('express');

const app = express();

const {createServer:createViteServer} = require('vite');

createViteServer().then(vite => {
    app.use(vite.middlewares);
    app.listen(4000, () => {
        console.log('Server is running on port 3000');
    });
});