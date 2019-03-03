const express = require("express")();
const bodyPaser = require("body-parser");
const twilio = require("twilio");
const accountSid = "AC37cd9764ba196b6621ea8f71a7e89ef6";
const authToken = "b8dece854e6529b0e60d287ebb165aec";

express.use(bodyPaser());

express.get("/signup", (req, res) => {
  res.send("ok");
});

express.post("/sms", (req, res) => {
  console.log(req.body);
  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: req.body.subject,
      from: "+18507357229",
      to: req.body.to
    })
    .then(message => res.send(message.sid))
    .done();
});

express.listen(process.env.PORT || 5000, () => {
  console.log("listnig");
});
