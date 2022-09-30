
// Run before ANYTHING
// before("Name", func)
before("Before", function() {
    console.log("Before")
})

describe("Demo", function() {
    
    describe("Addition", function () {

        this.beforeEach("BeforeEach", function(){
            console.log("BeforeEach")
        })
        this.beforeAll("BeforeAll", function(){
            console.log("BeforeAll")
        })
        // this.afterAll
        // this.afterEach
        
        it("1 + 1 = 2", function() {
        
            if ((1 + 1) !== 2){
                throw Error();
            }
            
        })

        it("3 + 3 = 6", function() {
        
            if ((3 + 3) !== 6){
                throw Error();
            }
            
        })

        it.skip("Always Failed", function(){

            throw Error()
        
        })

    })

})