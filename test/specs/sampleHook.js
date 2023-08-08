describe("hooks", ()=>{

    before(async ()=>{
        console.log("Before suite")
    })
    after(()=>{
        console.log("After suite")
    })
    beforeEach(()=>{
        console.log("before each method")
    })
    afterEach(()=>{
        console.log("after each method")
    })
    it("TC1", ()=>{
        console.log("Test case one ")
    })

    it("TC2",()=>{
        console.log("Test case two")
    })
})