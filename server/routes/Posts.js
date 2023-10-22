const express = require('express')
const router = express();
const {Posts} = require("../models")

router.post("/new",  async (req, res)=>{
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

router.get('/list', async (req, res)=>{
    const list = await Posts.findAll();
    res.json(list);
})

router.get('/byId/:id', async (req, res) =>{
const id = req.params.id;
const post = await Posts.findByPk(id)
res.json(post);
});

module.exports = router;