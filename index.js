const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({message: "welcome to my contact form"});
})


app.post("/api/form", (req, res) => {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port:465,
        auth:{
            user: "marlonmora.ndr@gmail.com",
            pass: "Smoothie101018_"
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

smtpTransport.sendMail(mailOptions, (error,response)=>{

        if(error){
            res.send(error)
        }
        else{
            res.send("Success")
        }
})

smtpTransport.close();



})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
