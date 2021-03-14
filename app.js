const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World! This is Full Pipelined Deployment'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
