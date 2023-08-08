describe("Scrolling Views", ()=>{
    
    it("Vertical View", async ()=>{
        const search = await $('~Search')
        const time = await $('~Monday, Jul 24')
        search.touchAction([
            'press',
            { action: 'moveTo', element: time },
            'release'
        ])
        await browser.pause(1000)
        await $('~API Demos').click()
        await browser.pause(2000)
        await $('//android.widget.TextView[@text="Views"]').click()
        await browser.pause(1000)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("WebView")')
        await browser.pause(1000)
        await expect($('//android.widget.TextView[@text="WebView"]')).toExist()
    })
    it.only("Horizontal View", async ()=>{
        const search = await $('~Search')
        const time = await $('~Monday, Jul 24')
        search.touchAction([
            'press',
            { action: 'moveTo', element: time },
            'release'
        ])
        await browser.pause(1000)
        await $('~API Demos').click()
        await browser.pause(2000)
        await $('//android.widget.TextView[@text="Views"]').click()
        await browser.pause(1000)
        await $('//android.widget.TextView[@text="Gallery"]').click()
        await browser.pause(1000)
        await $('//android.widget.TextView[@text="1. Photos"]').click()
        await browser.pause(1000)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(5)')
        
    })
})