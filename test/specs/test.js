describe("suite", ()=>{
    it("test", async ()=>{
         const phoneApp = await $('~Phone')
         await browser.pause(5000)
         await phoneApp.click();  
         await browser.pause(5000)
         const morePost = await $('~More options')
         await expect(morePost).toBeExisting()     
    })
    
})