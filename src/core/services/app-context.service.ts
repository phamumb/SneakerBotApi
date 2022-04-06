/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import * as Sites from '../utils/sites';
import Puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Cluster } from 'puppeteer-cluster';
import Ua from 'puppeteer-extra-plugin-anonymize-ua';
import UserAgent from 'user-agents';
import { PuppeteerNodeLaunchOptions } from 'puppeteer';

// Puppeteer.use(StealthPlugin());
// Puppeteer.use(Ua());

@Injectable()
export class AppContextService {
    private _options: PuppeteerNodeLaunchOptions = {
        headless: false,
        defaultViewport: null,
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
        Cluster.launch({
            puppeteer: Puppeteer,
            concurrency: Cluster.CONCURRENCY_BROWSER,
            maxConcurrency: 1,
            timeout: 5 * 60 * 1000,
            puppeteerOptions: this._options
        }).then(cluster => {
            this._cluster = cluster;
            this._cluster.task(async ({ page, data }) => {
                console.log(data);
            })
        })
    }

    queue() {
        this._cluster.queue({ test: 'test' });
    }
}
