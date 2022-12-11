describe('Frame Handling', () => {
    it('Frame Example. ', async () => {

        await browser.url("https://ineuron-courses.vercel.app/practise")

        await browser.pause(3000)

        const frame=await $("//iframe[contains(@src,'courses.vercel.app')]")

        await browser.switchToFrame(frame)

        await browser.pause(3000)

        
        await (await $("//button[text()='Log in ']")).click()

        await browser.switchToParentFrame()

            

    });
});