
import { BaseSite } from "./../utils/sites/base.site";
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import Sites from '../utils/sites';

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
import { Cluster } from 'puppeteer-cluster';
import Ua from 'puppeteer-extra-plugin-anonymize-ua';
import UserAgent from 'user-agents';
import { PuppeteerNodeLaunchOptions } from 'puppeteer';
import { firefox } from 'playwright';
import puppeteer = require('puppeteer-extra');



@Injectable()
export class AppContextService {

    private _options: PuppeteerNodeLaunchOptions = {
        headless: false,
        defaultViewport: null,
        product: 'chrome',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            // `--user-agent=${new UserAgent()}`
        ]
    }
    private _cluster: Cluster
    constructor() {
        // playwright.firefox.launch()
    }

    async queue(taskId) {
        const browser = await firefox.launch({
            headless: false,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-web-security",
                "--disable-features=IsolateOrigins,site-per-process",
            ]
        });

        const context = await browser.newContext({ viewport: null });
        const page = await context.newPage();
        await page.goto(
            "https://www.bestbuy.com/site/garmin-venu-gps-smartwatch-30mm-fiber-reinforced-polymer-black-with-silicone-band/6376438.p?skuId=6376438",
            {
                waitUntil: "commit",
            }
        );
        var site = new Sites['BestBuy'] as BaseSite;
        await site.addToCart(page);
    }
}
