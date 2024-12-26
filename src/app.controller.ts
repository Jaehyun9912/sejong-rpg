import { Controller, Logger, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { debug } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getTestData(@Body() data: string): void {
    const logger = new Logger("Head");

    logger.debug(data);
  }
}
