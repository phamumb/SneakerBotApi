import { Page } from "playwright";
import { Task } from "src/models/tasks/entities/task.entity";

export interface BaseSite {
    process(page: Page, task: Task);
}