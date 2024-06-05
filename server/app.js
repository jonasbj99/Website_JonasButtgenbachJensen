const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const CommentModel = require("./models/Comment.js");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5001;

mongoose.connect(
  "mongodb+srv://jonasbj99:TQG3v8atKtPvlTN9@cluster0.yypdhf8.mongodb.net/CommentDB?retryWrites=true&w=majority"
);

app.get("/getComments", (req, res) => {
  CommentModel.find({}).then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createComment", async (req, res) => {
  const comment = req.body;
  const newComment = new CommentModel(comment);
  await newComment.save();

  res.json(comment);
});

app.listen(PORT, () => {
  console.log("SERVER CREATED AT PORT: " + PORT);
});
