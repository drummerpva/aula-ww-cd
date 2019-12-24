const express = require("express");

const app = express();

const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Olá Express");
});

app.listen(port, () => {
  console.log("Running Server");
});
