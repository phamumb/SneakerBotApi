import { Page } from "playwright";

export interface BaseSite {
    addToCart(page);
    checkout(page);
    process(page);
}