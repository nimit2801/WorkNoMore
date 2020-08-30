const arrPaths = [];
arrPaths[0] = "/views/task_0.html";
arrPaths[1] = "/views/task_1.html";
arrPaths[2] = "/views/task_2.html";
arrPaths[3] = "/views/task_3.html";
arrPaths[4] = "/views/task_4.html";
const path = require("path");
const rootDir = require("../utils/path");

const express = require("express");
const router = express.Router();

router.get("/random", (req, res) => {
  var chosenPath = arrPaths[Math.floor(Math.random() * arrPaths.length)];
  console.log(chosenPath);
  res.sendFile(path.join(rootDir + chosenPath));
});

module.exports = router;
