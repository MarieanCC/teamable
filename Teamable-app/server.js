const epress = require('express')
const app = express() 

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '/dist')))

app.listen(3000, function () {
  console.log('app listening on port 3000!')
}) 