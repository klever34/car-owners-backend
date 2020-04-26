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
    return error
  }
});

app.post("/cars", async (req, res) => {
  console.log(req.body)
  try {
    const cars = await db("car").insert({id: parseInt(Math.random(150000, 1000000) * 100000), first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, country: req.body.country
  ,car_model: req.body.car_model, car_model_year: req.body.car_model_year, car_color: req.body.car_color, gender: req.body.gender, job_title: req.body.job_title,
  bio: req.body.bio});
    res.json({ "message": "Car successfully created" });
  } catch (error) {
    console.log(error)
    return error;

  }
});

app.post("/cars/find", async (req, res) => {
  try {
    let query = req.body.data;
    const cars = await db('car').select("*").where('car_model_year', query.start_year).andWhere('gender', query.gender).whereIn('car_color', query.colors).whereIn('country', query.countries);
    res.json({ cars });
  } catch (error) {
    return error;
  }
});

app.listen(port, ()=>{
    console.log("🚀 live on port 3000");
});