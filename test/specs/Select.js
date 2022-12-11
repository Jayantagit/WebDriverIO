describe('Handle Multiple Elements', () => {
    it('Usage of $$ ', async () => {

        await browser.url("https://ineuron-courses.vercel.app/signup")

        await browser.pause(3000)

        await (await $("#state")).click()

        await (await $("#state")).selectByVisibleText("Bihar")

        await browser.pause(10000)

    });
});