const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv/config");
const mongoose = require("./db/db");
const router = require("./routes/router");
const port = process.env.port || 5000;
const cors = require("cors");
const Combo = require("./models/comboSchema");
const { foodImgUpload } = require("./utils/fileUpload");
const uploadTwo = require("./utils/fileuploadTwo");
const Menu = require("./models/menuSchema");
const secret = process.env.SECRET_KEY;

app.use("/foodImgFolder", express.static(__dirname + "/foodImgFolder"));
app.use("/images", express.static(__dirname + "/images"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the HTTP methods you want to allow
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
  })
);
app.use(express.json());
app.use("/", router);
app.use(cookieParser());

app.get("/api/getcombos", foodImgUpload, async (req, res) => {
  try {
    const combos = await Combo.find({});
    res.status(201).json({ combos });
  } catch (error) {
    console.log("error fectching all combos", error);
    res.status(500).json({ message: "internal server error" });
  }
});

app.get("/api/menu", uploadTwo, async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(201).json({ menuItems });
  } catch (error) {
    console.error("Error fetching menu items", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(port, async () => {
  await mongoose;
  console.log(`Server listening on ${port}`);
});
