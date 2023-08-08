describe("suite", ()=>{
    it("test", async ()=>{
        const chromeApp = await $('android=new UiSelector().textContains("Chrome")')
        await browser.pause(5000)
        await chromeApp.click();
    })
 
})