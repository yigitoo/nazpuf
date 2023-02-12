const express = require('express')
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/', (req, res) => res.render('pages/index'))
app.get('/gallery', (req, res) => res.render('pages/gallery'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }\nServer addr: http://localhost:3000/`))