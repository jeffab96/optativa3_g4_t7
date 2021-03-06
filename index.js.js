const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3001
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hola', (req, res) => {
res.send({ message: 'Hola mundo'}) 
})

app.listen(port, () => {
 console.log(`El servidor est� inicializado en el puerto ${port}`);
});