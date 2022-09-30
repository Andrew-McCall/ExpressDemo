const mongoose = require("mongoose");
const {TrainerModel} = require("../Data/Trainers")
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index")

chai.use(chaiHttp);

// let server = null
const url = "localhost:3001";

before("Start Server", async function(done){
    await mongoose.connection.close()
    await mongoose.connect("mongodb://127.0.0.1:27017/QATest")
    console.log("Test DB Connected!")
    done();
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

    this.beforeAll("Test Data", async function(done){
        await TrainerModel.deleteMany({});
        // await TrainerModel.create(TestOne);
        // await TrainerModel.create(TestTwo);
        done()
    })

    it("/getAll", function(done){
        TrainerModel.find({}).then(ts => {
            chai.request(url+"/trainers").get("/getAll").then( res => {

                // chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(ts)

                done()
            })
        })
        
    })


})

after("Stop Server", function(){
    server.close();
})