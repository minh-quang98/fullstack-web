require('dotenv').config()
var express = require('express')
var bodyParse = require('body-parser');
var cors = require("cors") 
var router = require("./applications/router")
var morgan = require("morgan")
var path = require("path")


var app = express()

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true}))
app.use(cors())

app.use(morgan("dev"))

require("./config/passport")

app.use(router)

app.use("/static", express.static(path.join(__dirname, "static")))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App is running at ${PORT}!`))
