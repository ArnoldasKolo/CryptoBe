const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
app.use(cors())
const authMiddleware = require("./middleware/auth");

const user = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(user);


app.post('/userLogData', authMiddleware, (req, res) => {
  try {
    const userId = req.body.userId
    const filteredData = req.body;
    console.log(`Filtered Data of user : ${userId}`, filteredData);

    // Perform any necessary processing here

    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('Error processing filtered data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(process.env.PORT, () => {
  console.log("Your app is alive!!!!!");
});