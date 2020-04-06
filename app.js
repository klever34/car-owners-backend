const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./data/db.js");
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/cars", async (req, res) => {
  const cars = await db("car");
  res.json({ cars });
});

app.post("/cars/find", async (req, res) => {
  let query = req.body.data;
  const cars = await db('car').select("*").where('car_model_year', query.start_year).andWhere('gender', query.gender).whereIn('car_color', query.colors).whereIn('country', query.countries);
  res.json({ cars });
});

app.listen(3000, ()=>{
    console.log("🚀 live on port 3000");
});