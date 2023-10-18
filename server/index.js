const express = require("express");
const app = express();
app.use(express.json())

const cors = require("cors")
app.use(cors());

const db = require("./models");

//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is up!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
