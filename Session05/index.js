var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true});

const Student = mongoose.model('Student', {
    name: String,
    address: {
        type: Map,
        validate: function(v) {
            console.log(v.get("wrad"))
            return v.get("wrad") !== "Cau Giay";
        }
    }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



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


app.get("/students", (req,res) =>{
    Student.find({}, function(err, docs) {
        if(!err) {
            res.json({
                student: docs
            });
        } else {
            res.json({success: false});
        }
    })

    // res.json({
    //     students: students
    // })
})

app.get("/students/:id", (req,res) => {
    Student.findOne({_id: req.params.id}, function(err,student) {
        if(!err) {
             res.json({
                 student: student
             });
         } else {
             res.json({success: false});
         }
    });
})

app.post("/students", (req,res) => {
    const name = req.body.name;
    const address = req.body.address;
    const student = new Student({
        name: name,
        address: address
    });

    const error = student.validateSync();
    console.log(error);

    student.save(function(err) {
        if(!err) {
            res.json({
                success: true
            })
        } else {
            res.json({success: false})
        }
    })
    
})

app.put("/students/:id", (req, res) => {
    Student.updateOne({_id: req.params.id}, {
        name: req.body.name,
        address: req.body.address
    }, function(err) {
            if(!err) {
                res.json({success: true});
            } else {
                res.json({success: false});
            }
        }
    );
});

app.delete("/students/:id", (req, res) => {
    Student.deleteOne({_id: req.params.id}, function(err) {
        if(!err) {
            res.json({success: true});
        } else {
            res.json({success: false});
        }
    })
})

app.listen(3000, () => console.log("server is running"))