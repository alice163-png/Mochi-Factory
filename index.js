import express from "express";
import bodyParser from "body-parser";
import data from './recipe.json' with { type: 'json' };

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  if(req.body["choice"] === 'strawberry'){
    res.render("index.ejs", {recipe: data[0]});
  }else if(req.body["choice"] === 'chocolate'){
    res.render("index.ejs", {recipe: data[1]});
  }else if(req.body["choice"] === 'matcha'){
    res.render("index.ejs", {recipe: data[2]});
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
