const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());



app.get('/', (req, res) => {
    res.json({message: "welcome to my contact form"});
})

var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.options("/api/form", cors(corsOptions)) 

  app.post("/api/form", cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port:465,
        auth:{
            user: process.env.USER,
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


app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

smtpTransport.sendMail(mailOptions, (error,res)=>{

        if(error){
            res.send(error)
        }
        else{
            res.send("Success")
        }
})

smtpTransport.close();


})

