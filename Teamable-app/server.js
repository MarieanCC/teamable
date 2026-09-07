const express = require('express')
const path = require('path')
const app = express()
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'company_db'
const colName ='employees'

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '/dist')))

app.get('/get-profile', async function(req, res) {
  const response = {
    name: "Anna Smith",
    email: "anna.smith@example.com",
    interests: "coding"
  }

// connect to db 
await client.connect()
console.log('Connected successfully to server')
// get data from database 

  res.send(response)
})

app.post('/update-profile', async function(req, res) {
  const payload = req.body
  console.log(payload)

  if (!payload || Object.keys(payload).length === 0) {
    res.status(400).send({error: "empty payload. Couldn't update user profile data"})
  } else {
    // updating user profile
    // connect to mongodb database 
    await client.connect()
    console.log('Connected successfully to server')

    // initiates the database  
    const db =client.db(dbName)
    const collection = db.collection(colName) 
    // save payload data to the database 
    payload['id'] = 1
    const updatedValues = {$set: payload}
    await collection.updateOne({id: 1}, updatedValues, {upsert: true} )
    client.close()
    res.status(200).send({info: "user profile data updated successfully"})
  }
  // saving payload into database 

    res.send({info: "user profile data updated successfully"})
})
app.listen(3000, function () {
  console.log('app listening on port 3000!')
}) 