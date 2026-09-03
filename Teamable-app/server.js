const express = require('express')
const path = require('path')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '/dist')))

app.get('/get-profile', function(req, res) {
  const response = {
    name: "Anna Smith",
    email: "anna.smith@example.com",
    interests: "coding"
  }
  res.send(response)
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
}) 