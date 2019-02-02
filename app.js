const express = require("express");
const dateParser = require("./date-parser");

const app = express();

app.get("/api/timestamp/:userDate?", (req, res) => {
  const { userDate } = req.params;
  res.json(dateParser(userDate));
});

app.listen(3000, () => {
  console.log("app is runing ....");
});
