import { Page } from 'playwright';
import { BaseSite } from 'src/core/utils/sites/base.site';

export default class NikeSite implements BaseSite {
    checkout() {
        console.log('Nike checkout')
    }

}