import { Module } from '@nestjs/common';
import { AppContextService } from './services/app-context.service';

@Module({
    imports: [],
    controllers: [],
    providers: [AppContextService],
    exports: [AppContextService]
})
export class CoreModule {}
