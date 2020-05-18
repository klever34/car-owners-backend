const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./data/db.js");
const app = express();
const cors = require('cors');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", async (req, res) => {
  return res.json("Welcome Home 🌚");
});

app.get("/cars", async (req, res) => {
  try {
    const cars = await db("car");
    res.json({ cars });
  } catch (error) {
    console.log(error)
  }
});

app.post("/cars/find", async (req, res) => {
  try {
    let query = req.body;
    const cars = await db('car').select('*').where('car_model_year', query.start_year).orWhere('gender', query.gender).orWhereIn('car_color', query.colors).orWhereIn('country', query.countries).limit(1000);
    res.json({ cars });
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, ()=>{
    console.log("🚀 live on port 3000");
});
