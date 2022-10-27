const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const Friends = require('./data/Friends.json');
const Brothers = require('./data/brothers.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("practice server is running")
})
app.get('/friends', (req, res) => {
    res.send(Friends);
})
app.get('/brothers', (req, res) => {
    res.send(Brothers);
})


app.listen(port, () => {
    console.log("practice server is running");
})