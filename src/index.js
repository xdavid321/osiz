// Import required libraries
const express = require("express");
const path = require("path");

if(process.env.NODE_ENV == "development") {
    console.log("Starting in development mode");
    require("dotenv").config({path: path.join(__dirname, "./.env")});
}

require("./database");
const apiRouter = require("./routes");

// Instantiate an express app
const app = express();

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "../public")));

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${port}`)
})