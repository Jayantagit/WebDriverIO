describe('Dynamic Wait', () => {
    it('Wait For Display.. ', async () => {

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")

        await browser.pause(3000)

        await (await $("//button[normalize-space()='Start']")).click()

        const ele=await $("//h4[normalize-space()='Hello World!']")

        await ele.waitForDisplayed({timeout:14000})

        console.log("element is display",await ele.isDisplayed());

    });
});