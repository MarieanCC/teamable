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

app.post('/update-profile', function(req, res) {
  const payload = req.body
  console.log(payload)
  if (!payload || Object.keys(payload).length === 0) {
    res.status(400).send({error: "empty payload. Couldn't update user profile data"})
  } else {
    // updating user profile
    res.status(200).send({info: "user profile data updated successfully"})
  }
  // saving payload into database 

  res.send({info: "user profile data updated successfully"})
})
app.listen(3000, function () {
  console.log('app listening on port 3000!')
}) 