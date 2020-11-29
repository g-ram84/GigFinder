const { app } = require("../server");
function smsRoutes(client) {
  app.post("/sms/applicationdenied", (req, res) => {
    client.messages.create({
      from: "+15873168138",
      to: "+14037019333",
      body: "Your application was not succesful"
    }).then((message) => {
      return message;
    }).then((message) => console.log(message));
  });

  app.post("/sms/applicationaccepted", (req, res) => {
    console.log("Here");
    client.messages.create({
      from: "+15873168138",
      to: "+14037019333",
      body: "You'hired!!"
    }).then((message) => {
      return message;
    }).then((message) => console.log(message));
  });
}
exports.smsRoutes = smsRoutes;