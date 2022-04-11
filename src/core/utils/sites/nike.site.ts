import { Console } from 'console';
import { Page } from 'playwright';
import { BaseSite } from 'src/core/utils/sites/base.site';
import { pathToFileURL } from 'url';

export default class NikeSite implements BaseSite {
  async process(page: Page) {
    await this.addToCart(page);
    if (await this.checkInCart(page)) {
      await this.checkout(page);
    }
  }

  async addToCart(page: Page) {
    console.log('Add to Cart');
    // sizes on Nike must be entered in US size, even if on a international site e.g. Nike EU
    const sizesSelector = 'div.mt2-sm div input, div.mt4 div input';
    // using timeout 0 in case we are waiting for product drop and then sizes are enabled
    await page.waitForSelector(sizesSelector, { timeout: 0 });
    await page.evaluate(
      ([sizesSelectorText, sizeValue]: [string, string]) => {
        const sizes = Array.from(document.querySelectorAll(sizesSelectorText));
        const matchingSize = sizes.find((sz: HTMLInputElement) =>
          sz.value.endsWith(sizeValue),
        ) as HTMLInputElement;
        if (matchingSize) {
          matchingSize.click();
        }
      },
      [sizesSelector, 9],
    );

    const atcButtonSelector = 'text="Add to Bag"';
    await page.waitForSelector(atcButtonSelector);
    await page.waitForTimeout(2000);
    await page.focus(atcButtonSelector);
    await page.click(atcButtonSelector, {
      delay: 3000,
      button: 'left',
    });
  }

  async checkout(page) {
    await page.click('text="Checkout"', {delay: 1000});
  }

  async checkInCart(page) {
    console.log('Check for In-Cart');
    const cartSelector =
      'span.pre-jewel.pre-cart-jewel.text-color-primary-dark';
    await page.waitForSelector(cartSelector);
    const cartCount = await page.evaluate((cartTextSelector) => {
      return document.querySelector(cartTextSelector).innerText;
    }, cartSelector);

    return cartCount > 0;
  }
}
