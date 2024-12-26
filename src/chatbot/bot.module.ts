import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';

@Module({
    imports: [],
    providers: [BotService],
    controllers: [BotController],
})
export class BotModule {}
