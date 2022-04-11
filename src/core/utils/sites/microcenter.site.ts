import { Page } from 'playwright';
import { BaseSite } from './base.site';

export default class MicrocenterSite implements BaseSite {
  async process(page: Page) {
    await this.reserve(page);
  }

  async reserve(page: Page) {
    let reserveBtn = "text='RESERVE NOW'";
    await page.waitForSelector(reserveBtn);
    await page.click(reserveBtn);

    let gotoCartBtn = "text='PROCEED TO CART'";
    await page.waitForSelector(gotoCartBtn);
    await page.click(gotoCartBtn);

    let reserveNowBtn = "text='RESERVE NOW'";
    await page.waitForSelector(reserveNowBtn);
    await page.click(reserveNowBtn);
  }
}
