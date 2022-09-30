const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express();

app.use(bodyParser.json())

app.use("/api", require("./Routes/api"))
app.use("/trainers", require("./Routes/trainer"))

mongoose.connect("mongodb://127.0.0.1:27017/QA").then( () => {
    console.log("DB Connected!")
})

const server = app.listen(3001, () => {
    console.log("Server started Successfully on port "+ server.address().port )
})

