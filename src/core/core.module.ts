import { AppContextService } from '../core/services/app-context.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [AppContextService],
})
export class CoreModule {}
