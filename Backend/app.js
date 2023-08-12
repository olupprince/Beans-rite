const express = require("express");
const mongoose = require('./MongoDB/db');
const route = require('./Router/routes')
const app = express();


const PORT = process.env.PORT;

app.use(route);

app.get("./api", (req, res) => {
  res.json({ message: "Listening from server!" });
});

app.listen(PORT, async () => {
  mongoose;
  console.log(`Server listening on port ${PORT}`);
});
