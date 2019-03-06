const express = require('express');

const router = express.Router();


const User = require('./userDb.js');
const Post = require('./postDb.js');

router.get('/', async(req, res) => {
    try {
        const posts = await Post.get(req.query);
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({
            message: "Could not get posts"
        })
    }
})


router.get('/:id', async (req, res) => {
    const userPost = await User.getUserPosts(req.params.id);
    // const post = await Post.getById(req.params.id)
    // console.log(user)
    // console.log(post)
    if(userPost) {
        try {
            res.status(200).json(userPost)
        }
        catch(err) {
            res.status(500).json({
                err:"Cannot retrieve post"
            })
        }
    }
})

module.exports = router;