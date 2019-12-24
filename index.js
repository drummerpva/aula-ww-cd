const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Olá Express Deploy 2");
});

app.listen(port, () => {
  console.log(`Running Server at ${port}`);
});
