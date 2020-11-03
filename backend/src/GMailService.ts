const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const oauth2Client = new OAuth2(
    "1002709865150-eaebtmjtmsh41ek9b57us4k4i4e1d74i.apps.googleusercontent.com", // ClientID
    "MzHR7rSmRqLD2ZgOSuw08BlZ", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "1//04qce1RayFpt0CgYIARAAGAQSNwF-L9Ir5eTiTNsj_pMV5UkJZCwePcPg25dj4XhrXagzR8xw7ozIksxyej5Q5GBQslYUFUI3B4k"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "ku.people.team@gmail.com", 
         clientId: "1002709865150-eaebtmjtmsh41ek9b57us4k4i4e1d74i.apps.googleusercontent.com",
         clientSecret: "MzHR7rSmRqLD2ZgOSuw08BlZ",
         refreshToken: "1//04qce1RayFpt0CgYIARAAGAQSNwF-L9Ir5eTiTNsj_pMV5UkJZCwePcPg25dj4XhrXagzR8xw7ozIksxyej5Q5GBQslYUFUI3B4k",
         accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

const mailOptions = {
    from: "ku.people.team@gmail.com",
    to: "unnop.nu@ku.th",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});