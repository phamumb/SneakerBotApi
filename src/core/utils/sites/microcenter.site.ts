import { Page } from 'playwright';
import { Task } from 'src/models/tasks/entities/task.entity';
import { BaseSite } from './base.site';

export default class MicrocenterSite implements BaseSite {
  async process(page: Page, task: Task) {
    await this.selectStore(page);
    await this.reserve(page);
    await this.login(page, task);
  }

  async reserve(page: Page) {
    let reserveBtn = "text='RESERVE NOW'";
    await page.waitForSelector(reserveBtn);
    await page.click(reserveBtn);

    // let gotoCartBtn = "text='PROCEED TO CART'";
    // await page.waitForSelector(gotoCartBtn);
    // await page.click(gotoCartBtn);

    // let reserveNowBtn = "text='RESERVE NOW'";
    // await page.waitForSelector(reserveNowBtn);
    // await page.click(reserveNowBtn);
  }

  async selectStore(page: Page) {
    let selectStore = "a.dropdown-item:has-text('Cambridge')"
    await page.waitForSelector(selectStore);
    await page.click(selectStore);
  }

  async login(page: Page, task: Task) {
    let signInBtn = "[value='Sign In']";
    await page.fill("[type='email']", task.account.username);
    await page.fill("[type='password']", task.account.password);
    await page.locator(signInBtn).click();
  }

  async checkout(page: Page, task: Task) {
    await page.fill
  }
}
