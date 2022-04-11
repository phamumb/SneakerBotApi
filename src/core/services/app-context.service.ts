/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { firefox } from 'playwright';
import { PuppeteerNodeLaunchOptions } from 'puppeteer';
import Sites from '../utils/sites';
import { BaseSite } from './../utils/sites/base.site';

@Injectable()
export class AppContextService {
  private _options: PuppeteerNodeLaunchOptions = {
    headless: false,
    defaultViewport: null,
    product: 'firefox',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
      // `--user-agent=${new UserAgent()}`
    ],
  };

  private _cluster: any[] = [];
  constructor() {}

  async process({ task }) {
    const browser = await firefox.launch(this._options);
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();
    await page.goto(task.url, {
      waitUntil: 'commit',
    });
    var site = new Sites[task.siteId]() as BaseSite;
    this._cluster.push({ id: task.id, page: page });
    await site.process(page);
  }

  async terminate(task) {
    let e = this._cluster.find((x) => x.id == task.id);
    console.log(task);
    if (e) {
      e.page.close();
      var index = this._cluster.indexOf(e);
      console.log(index);
    }
  }
}
