const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

//app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

app.use(express.static('dist'))