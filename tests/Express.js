const mongoose = require("mongoose");
const {TrainerModel} = require("../Data/Trainers")
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index")

chai.use(chaiHttp);

// let server = null
let url = "localhost:3001";

before("Start Server", async function(){
    await mongoose.connection.close()
    await mongoose.connect("mongodb://127.0.0.1:27017/QATest")
    console.log("Test DB Connected!")
    TrainerModel.deleteMany({});
})

describe("API", function(){

    it("/get", function(){
        chai.request(url+"/api").get("/get").end((err, res) => {

            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200)

            chai.expect(res).to.have.property("text")
            chai.expect(res.text).to.equal("Hello World!")
            
        })
    })

    it("/post", function(){
        const body = {test:'test Data'}
        chai.request(url+"/api").post("/post").send(body).end((err, res) => {

            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(201)

            chai.expect(res.body).to.have.property("test")
            chai.expect(res.body.test).to.equal(body.test);

            chai.expect(JSON.stringify(res.body)).to.equal(JSON.stringify(body))

        })
    })

})


describe("Trainers", function(){

    it("/getAll", function(){
        chai.request(url+"/trainers").get("/getAll").end((err, res) => {

            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200)

            // console.log(res.body).to.equal(testBodyVariable)
            
        })
    })

})

after("Stop Server", function(){
    server.close();
})