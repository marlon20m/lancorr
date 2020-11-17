const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({message: "welcome to my contact form"});
})

const oauth2Client = new OAuth2(
    "19442885581-7kta7t83fs5dirnleflfkufr7i2jmk7a.apps.googleusercontent.com", // ClientID
    "9foBtI-6ToaHhQs0bndjfx_k", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);


oauth2Client.setCredentials({
    refresh_token: "1//0faPpHx2-HDFfCgYIARAAGA8SNwF-L9IraO_BqEFNP6JcSTC8lTGgcFKDoDd5aPYispqgNkiWjtS-wIhI05pYOh_03UDe7Tvtrog"
});
const accessToken = oauth2Client.getAccessToken()

    app.post("/api/form", (req, res) => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port:465,
        auth: {
             type: "OAuth2",
             user: "marlonmora.ndr@gmail.com", 
             clientId: "19442885581-7kta7t83fs5dirnleflfkufr7i2jmk7a.apps.googleusercontent.com",
             clientSecret: "9foBtI-6ToaHhQs0bndjfx_k",
             refreshToken: "1//0faPpHx2-HDFfCgYIARAAGA8SNwF-L9IraO_BqEFNP6JcSTC8lTGgcFKDoDd5aPYispqgNkiWjtS-wIhI05pYOh_03UDe7Tvtrog",
             accessToken: accessToken
        }
      })
 
        const mailOptions = {
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
   

transport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    transport.close();

        })

    });