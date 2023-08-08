describe("alerts", ()=>{
    it("sample Alerts", async ()=>{
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
        await $('(//android.widget.TextView[@resource-id="android:id/text1"])[3]').click()
        await browser.pause(2000)
        await $('(//android.widget.TextView[@resource-id="android:id/text1"])[4]').click()
        await browser.pause(2000)
        await $('//android.widget.Button[@resource-id="com.hmh.api:id/two_buttons"]').click()
        await browser.pause(1000)
        console.log(await browser.getAlertText())
        //await browser.acceptAlert()
        //await browser.dismissAlert()
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
        await browser.pause(1000)
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist()
    })
})