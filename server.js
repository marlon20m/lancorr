const express = require("express");
const environment = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3001;
const path = require("path");

const app = express();

app.set("port", PORT);


console.log(process.env.NODE_ENV);
if (environment === "production") {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})