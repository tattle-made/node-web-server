const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.redirect('https://gettattle.app/'))

app.get('/blog', (req, res) => res.redirect('http://blog.tattle.co.in/'))

app.get('/services', (req, res) => res.redirect('http://services.tattle.co.in/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))