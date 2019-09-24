var express = require('express')
var passport = require("passport")
var passportLocal = require("passport-local")
var authService = require("../../domain/service/authService")
var router = express.Router()
var auth = require("../../config/auth")

passport.use(
    new passportLocal(async (email, password, done) => {
        console.log(user)
        const user = await authService.login(email, password);
        if (!user) {
            return done(err, false);
        }
        return done(null, user)
    })
)

router.post("/login", async  (req,res) => {
   const {email, password} = req.body
   try {
       const user = await authService.login(email, password);
       res.json(user)
   } catch (err) {
       res.status(401)
       res.json({
           code: err.message
       })
   }
})

router.post("/register", auth.optional, async  (req,res) => {
    const {email, password} = req.body
    try {
        const user = await authService.signUp(email, password)
        res.json(user)
    } catch (err) {
        res.status(400);
        res.json({
            email: err.message
        })
    }
})
router.post("/logout", (req, res) =>{

})

module.exports = router