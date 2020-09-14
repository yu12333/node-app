const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send("Welcome to Abdulrahman's first Node app! Keep things Jiggy ;-) "));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
