import { Page } from 'playwright';
import { BaseSite } from 'src/core/utils/sites/base.site';

export default class BestBuySite implements BaseSite {
    async process(page: any) {
        await
    }
    async addToCart(page) {
        const atcButtonSelector = "text='Add to Cart'";
        console.log("Add to cart");
        await page.waitForSelector(atcButtonSelector);
        await page.waitForTimeout(3000);
        await page.focus(atcButtonSelector);
        await page.click(atcButtonSelector, {
            delay: 2000,
            button: "left",
        });

    }
    async checkout(page) {
        const goToCartSelector = 'text="Go to Cart"'
        console.log('Go to Cart');
        await page.waitForTimeout(10000);
        // await page.waitForSelector(goToCartSelector);
        await page.click(goToCartSelector);

        const checkoutSelector = "text='Checkout'";
        console.log('Checkout');
        await page.waitForSelector(checkoutSelector);
        await page.click(checkoutSelector);

        console.log('Sign in');
        const usernameInput = ''
    }

}