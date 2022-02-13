const express = require('express')
const port = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => {
  res.send("Bonjour à tous!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
