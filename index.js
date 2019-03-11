const express = require("express")();
const bodyPaser = require("body-parser");
const twilio = require("twilio");

const accountSid = "TWILIO_SID";
const authToken = "TWILIO_AUTH_TOKEN";

express.use(bodyPaser());

express.get("/signup", (req, res) => {
  res.send("ok");
});

express.post("/sms", (req, res) => {
  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: req.body.subject,
      from: "Your twilio phone number.",
      to: req.body.to
    })
    .then(message => res.send(message.sid))
    .done();
});

express.listen(process.env.PORT || 5000, () => {
  console.log("listnig");
});
