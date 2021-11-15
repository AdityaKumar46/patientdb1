const connectToMongo = require('./db');
var cors = require('cors')
const bodyParser = require("body-parser")
connectToMongo();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
    

app.use(express.json());
app.use('/api/auth', require('./routes/auth'))


if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('./client/build'))
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})