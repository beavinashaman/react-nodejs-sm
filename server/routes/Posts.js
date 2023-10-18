const express = require('express')
const router = express();
const {Posts} = require("../models")

router.post("/new", async (req, res)=>{
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

router.get('/list', async (req, res)=>{
    const list = await Posts.findAll();
    res.json(list);
})

module.exports = router;