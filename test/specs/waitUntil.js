describe('WaitUntil', () => {
    it('Wait Until Test', async () => {

        await browser.url("http://seleniumpractise.blogspot.com/2016/08/how-to-use-explicit-wait-in-selenium.html")

        await browser.maximizeWindow()

        await (await $("//button[normalize-space()='Click me to start timer']")).click()

      //  browser.pause(10000)

        const ele = await $("#demo")

        console.log("Element value",ele.getText());

        await  ele.waitUntil(async function() {
            return await (this.getText()) === "WebDriver"

        },
            {
                timeout: 34000,
                timeoutMsg: "Value not Found"
            }


        )

        console.log(ele.getText());

    });

    console.log(ele.getText());
});