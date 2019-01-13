var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from 'puppeteer';
describe('FeaturedDropdown', () => {
    it('it is <img /> correctly', () => __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch({ headless: false });
        const page = yield browser.newPage();
        page.emulate({
            viewport: {
                width: 1920,
                height: 1080
            },
            userAgent: ''
        });
        yield page.goto('http://localhost:3000/');
        yield page.waitForSelector('featured-dropdown');
        const html = yield page.$eval('featured-dropdown', e => {
            console.log('innerHTML: ', e.innerHTML);
            return e.innerHTML;
        });
        expect(html).toContain('<img');
        browser.close();
    }), 16000);
});
