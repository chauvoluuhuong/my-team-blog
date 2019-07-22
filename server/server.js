const registerAPI = require('./api')
const express = require('express')
const app = express()
const cors = require('cors')
var server = require('http').createServer(app);

app.use(express.static('./assets'))
app.use(cors())

registerAPI(app)

const thisServer =  server.listen(8080, ()=> {
    console.log('server running at: ', thisServer.address().port)
})