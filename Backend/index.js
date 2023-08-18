const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const uri =
  "MONGODB_URI = mongodb+srv://lordyemight:O3Xr5hwNOwfCyQDT@transactions.mqiqfnf.mongodb.net";
const mongoose = require("mongoose");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connected");
  })

  .catch((error) => {
    console.error("error connecting to Mongo:", error);
  });

app.use(routes);

// app.get("./api", (req, res) => {
//   res.json({ message: "Listening from server!" });
// });

app.listen(PORT, () => {
  console.log("Server Listening on ${PORT}");
});
