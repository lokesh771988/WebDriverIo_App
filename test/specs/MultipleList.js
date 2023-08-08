describe("suite", ()=>{
    it("test", async ()=>{
        expectedList = ['Thursday, Jul 20', 'Messages', 'Chrome']
        actualList = []

        const listValues = await $$('android.widget.TextView')

        for(const ele of listValues){
            actualList.push(await ele.getText())
        }

        await expect(actualList).toEqual(expectedList);
    })

})