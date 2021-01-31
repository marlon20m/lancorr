const express = require("express");
const environment = process.env.NODE_ENV || "development";
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();

console.log(process.env);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.options("/send", cors()); 
app.get("/send", cors(), (req, res, next) => {
    res.json({message: "welcome to my contact form"});
})

app.options("/api/form", cors())
app.post("/api/form", function (req, res, next) {


    let data = req.body
    let smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
        auth:{
            user: process.env.USEREMAIL,
            pass: process.env.PASS
        }
    })


let mailOptions = {
    from: data.email,
    to: "marlonmora.ndr@gmail.com",
    subject: `Message from ${data.name}`,
    html:`
    
    <h3>Mensagem de Lancorr.com</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <br></br>
        <li>Email: ${data.email}</li>
        <br></br>
        <li>Message: ${data.message}</li>
        <br></br>
        </ul>
    <h3>Mensagem</h3>
        <h4>${data.message}</h4>
    `
    }




smtpTransport.sendMail(mailOptions, (error, response)=>{

        if(error){
            res.send(error)
        }
        else{
            res.send("Success")
        }
})

smtpTransport.close();

})


console.log(process.env.NODE_ENV);
if (environment === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, '../build')));

app.set("port", PORT);


app.listen(PORT, err => {
    
    console.log(`App running on port ${PORT}!`);
  });