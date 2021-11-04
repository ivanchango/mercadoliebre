const express = require('express');
const path = require('path');

const app = express();

//localhost:

app.listen(3000, () => console.log ('Esto fue exitoso'));

app.use(express.static('public'));

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath) 
}); 