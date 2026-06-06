import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const API = 'https://dogapi.dog/api/v1/facts?number=1&limit=1'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("index.ejs" , {content: ""});
});
app.post("/submit", async(req, res)=>{
    try {
    const result = await axios.get(API);
    res.render("index.ejs", {content: result.data.facts[0]});
  } catch (error) {
    res.render("index.ejs", {content: "Failed to fetch dog fact."});
  }
});


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})