const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

//Routes
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(()=>{
    app.listen('8000',()=>{
        console.log('server is up');
    });
});