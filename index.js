const puppeteer = require('puppeteer');

(async () => {
    //page load initialization
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');

    //delay function between automation actions
    async function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }

    //my types
    const myName = 'Ouriel';
    const myMail = 'ouriel@gmail.com';
    const myPhone = '054-123456';
    const myCompany = 'Best company ever'

    await delay(500)
    //Type automation
    await page.type('#name', myName);
    await page.type('#email', myMail);
    await page.type('#phone', myPhone);
    await page.type('#company', myCompany);

    await delay(500)
    //change dropdown
    await page.select('#employees', '51-500')

    await delay(500)
    //Screenshot before clicking button automation
    await page.screenshot({ path: 'screenshot.png' });

    await delay(500)
    //Button automation
    await page.click("form .button")

    await delay(500)
    //console.log after arriving thank you page
    console.log('Here we are in thank you page.\nThanks a lot!!!')

    await delay(500); //delay befor closing browser
    await browser.close();
})();