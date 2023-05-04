const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

const chef= require('./data/chefs.json');
const foods= require('./data/foods.json');

app.get('/', (req, res)=>{
    res.send('Server successfully run');
})
app.get('/chefs',(req, res)=>{
    res.send(chef);
})
app.get('/foods',(req, res)=>{
    res.send(foods);
})
app.get('/chefs/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const selectedChef = chef.find(i => parseInt(i.id) === id);
    res.send(selectedChef);
})
app.listen(port, ()=>{
    console.log(`Port ${port} running successfully`);
})