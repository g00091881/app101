const express = require('express')
const app = express()
var cors = require('cors')
const port = 8080

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', cors(corsOptions), function (req, res, next) {
    res.send({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})