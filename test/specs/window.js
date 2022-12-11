describe('Window Handling', () => {
    it('Multiple Windows/Tabs.. ', async () => {

        await browser.url("https://ineuron-courses.vercel.app/")

        await browser.pause(3000)

        await browser.newWindow("https://ineuron-courses.vercel.app/signup")

        await browser.pause(3000)

        await browser.switchWindow("https://ineuron-courses.vercel.app/signup")

        await (await $("#email")).setValue("jayanta@gmail.com")

        await browser.pause(3000)

        await browser.closeWindow()

        await browser.pause(3000)

        await browser.switchWindow("iNeuron Courses")

     

    });
});