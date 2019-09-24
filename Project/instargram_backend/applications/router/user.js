const express = require("express")
const router = express.Router();
const userService = require('../../domain/service/userService')
// follow user
router.post('/:following/follow', async (req, res) => {
    const {follower} = req.body; 
    const {following} = req.params
    const result = await userService.follow(follower, following)
    if (result === true) {
        res.json({
            success: true
        })
    } else {

    }
    userService.follow(follower, following)
})

router.post("/:following/unfollow", async (req,res) => {
    const {follower} = req.body;
    const {following} = req.params
    const result = await userService.unfollow(follower, following)
    if (result === true) {
        res.json({
            success: true
        })
    } else {

    }
    userService.unfollow(follower, following)
})
router.get('/', async (req, res) => {
    const queryString = req.query.q
    const result = await userService.search(queryString);
    res.json({
        result: result,
        total: result.length
    })
})

module.exports = router;