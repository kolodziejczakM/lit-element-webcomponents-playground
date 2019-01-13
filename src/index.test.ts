import puppeteer from 'puppeteer';

describe('FeaturedDropdown', () => {
    it('it is <img /> correctly', async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        page.emulate({
            viewport: {
                width: 1920,
                height: 1080
            },
            userAgent: ''
        });

        await page.goto('http://localhost:3000/');
        await page.waitForSelector('featured-dropdown');

        const html = await page.$eval('featured-dropdown',e => {
            console.log('innerHTML: ', e.innerHTML);
            return e.innerHTML;
        });

        expect(html).toContain('<img');

        browser.close();
    }, 16000);
});
