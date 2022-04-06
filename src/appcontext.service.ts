/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class AppContextService {
  async start() {
    await puppeteer.launch({
      product: 'firefox',
      extraPrefsFirefox: {
        // Enable additional Firefox logging from its protocol implementation
        // 'remote.log.level': 'Trace',
      },
      // Make browser logs visible
      dumpio: true,
    });
  }
}
