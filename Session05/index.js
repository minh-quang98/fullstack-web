var express = require("express");
var bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let students = [];

app.get('/class/:id', (req, res) =>{
    res.json({
        params: req.params
    })
})

app.post('/class', (req, res) => {
    console.log(req.body)
    res.json({
        message:"post request"
    })
})

app.get('/sum/:x1/:x2', (req,res) => {
    res.json({
        result: Number(req.params.x1) + Number(req.params.x2)
    })
})

app.get("/students", (req,res) =>{
    res.json({
        students: students
    })
})

app.get("/students/:id", (req,res) => {
    res.json({
        student: students.find(item => item.id === Number(req.param.id))
    })
})

app.post("/students", (req,res) => {
    students.push({
        id: req.body.id,
        name: req.body.name
    })
    res.json({
        success: true
    })
})

app.delete("/students/:id", (req, res) => {
    students = students.filter(item => item.id !== req.params.id)
    res.json({
        success: true
    })
})

app.listen(3000, () => console.log("server is running"))