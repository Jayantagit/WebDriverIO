describe('Alert Handling', () => {
    it('JS Alert.. ', async () => {

        await browser.url("https://the-internet.herokuapp.com/javascript_alerts")

        await browser.pause(3000)

        await (await $("//button[normalize-space()='Click for JS Alert']")).click()

        const alertText = await browser.getAlertText()
        expect(alertText).toContain("I am a JS Alert")

        browser.acceptAlert()

    });
});