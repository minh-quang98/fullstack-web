const express = require('express');
var fs = require("fs");
const app = express()
const port = 8081


app.get('/hello', (req, res) => {
    fs.readFile('document.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
      res.send("hello");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))