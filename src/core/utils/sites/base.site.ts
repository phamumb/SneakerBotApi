import { Page } from "playwright";

export interface BaseSite {
    process(page: Page);
}