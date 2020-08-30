const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors);
const homePage = require("./routes/home");
const randomTask = require("./routes/random_task");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use(homePage);
app.use(randomTask);
app.listen(PORT, () => {
  console.log(`The app is running on ${PORT}`);
});
