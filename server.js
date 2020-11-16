const express = require("express");
const environment = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3001;
const path = require("path");

const app = express();

app.set("port", PORT);


console.log(process.env.NODE_ENV);
if (environment === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, '../build')));



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})