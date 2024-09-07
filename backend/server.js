
const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
var cors = require('cors')

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors(
  {
    origin: ["http://localhost:3000/"],
    methods: ["POST", "GET"],
    credentials: true
  }
))
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
const path = require("path");

if(process.env.NODE_ENV === "production") 
{
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    } );
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
