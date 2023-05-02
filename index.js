const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

const chef= require('./data/chefs.json');

app.get('/', (req, res)=>{
    res.send('Hello!');
})
app.get('/chefs',(req, res)=>{
    res.send(chef);
})
app.listen(port, ()=>{
    console.log(`Port ${port} running successfully`);
})