const express = require("express");
const app = express();
const port = 3000;
let projectData = {};

// using express as alternative to deprecated bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("website"));

// dependencies
const cors = require("cors");
const { response } = require("express");
app.use(cors());

// create server
app.listen(port, () => {
  console.log(`Running on port: ${port}\n`);
});

// routes
app.get("/getLatestData", (req, res) => {
  console.log("Sending data from server\n");
  res.send(projectData);
});

app.post("/addLatestData", (req, res) => {
  console.log("Data received from client:");
  console.log(req.body, "\n");
  projectData = req.body;
  console.log("Sending latest projectData to client\n");
  res.send(projectData);
});
