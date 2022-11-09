const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/public"));

app.listen(port, () => {
  console.log("listening on port: ", port);
});