const mongoose = require("mongoose");
const {TrainerModel} = require("../Data/Trainers")
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index")

chai.use(chaiHttp);

// let server = null
const url = "localhost:3001";

before("Start Server", async function(){
    await mongoose.connection.close()
    await mongoose.connect("mongodb://127.0.0.1:27017/QATest")
    console.log("Test DB Connected!")
    TrainerModel.deleteMany({});
})

describe("API", function(){

    it("/get", function(done){
        chai.request(url+"/api").get("/get").then(res => {

            // chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200)

            chai.expect(res).to.have.property("text")
            chai.expect(res.text).to.equal("Hello World!")
            
            done()
        })
    })

    it("/post", function(done){
        const body = {test:'test Data'}
        chai.request(url+"/api").post("/post").send(body).then(res => {

            // chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(201)

            chai.expect(res.body).to.have.property("test")
            chai.expect(res.body.test).to.equal(body.test);

            chai.expect(JSON.stringify(res.body)).to.equal(JSON.stringify(body))
            done();
        })
    })

})


describe("Trainers", function(){

    it("/getAll", function(done){
        chai.request(url+"/trainers").get("/getAll").then( res => {

            // chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200)

            // console.log(res.body).to.equal(testBodyVariable)
            done()
        })
    })

})

after("Stop Server", function(){
    server.close();
})