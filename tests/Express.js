const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index")

chai.use(chaiHttp);

// let server = null
let url = "localhost:3001";

before("Start Server", function(){
    // Change DB connection to test
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