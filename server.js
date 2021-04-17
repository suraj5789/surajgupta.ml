const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('public'))
app.get('/getPing', (req, res) => {
  res.send(`Hello World! ${process.env.env}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})