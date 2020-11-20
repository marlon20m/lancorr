const express = require("express");
const environment = process.env.NODE_ENV || "development";
const path = require("path");

const app = express();


console.log(process.env.NODE_ENV);
if (environment === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, '../build')));



