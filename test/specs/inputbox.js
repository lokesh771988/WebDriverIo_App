describe("suite", ()=>{
    it("test", async ()=>{
        const chromeApp = await $('~Chrome')
        await browser.pause(2000)
        await chromeApp.click();  
        await browser.pause(3000)
        const input = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]')
        
        await input.addValue("Gorantla Lokesh")
        await browser.pause(2000)
        expect(await input).toHaveText("Gorantla Lokesh") 
    })   
})