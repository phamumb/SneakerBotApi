import { Page } from 'playwright';
import { BaseSite } from 'src/core/utils/sites/base.site';

export default class BestBuySite implements BaseSite {
  async process(page: any) {
    await this.addToCart(page);
    await this.gotoCart(page);
    await this.checkout(page);
  }

  async addToCart(page) {
    const atcButtonSelector = "text='Add to Cart'";
    console.log('Add to cart');
    await page.waitForSelector(atcButtonSelector);
    await page.waitForTimeout(3000);
    await page.focus(atcButtonSelector);
    await page.click(atcButtonSelector, {
      delay: 2000,
      button: 'left',
    });
  }

  async gotoCart(page) {
    try {
      const goToCartSelector = 'text="Go to Cart"';
      await page.waitForSelector(goToCartSelector);
      // await page.waitForSelector(goToCartSelector);
      await page.click(goToCartSelector);
    } catch (e) {
      console.log('catch');
      // this.gotoCart(page);
      
    } finally {
      console.log('finally');
    }
  }

  async checkout(page: Page) {
    const checkoutSelector = "text='Checkout'";
    console.log('Checkout');
    await page.waitForSelector(checkoutSelector);
    await page.click(checkoutSelector);

    console.log('Sign in');
    const usernameInput = '';
  }
}
