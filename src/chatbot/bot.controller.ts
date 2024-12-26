import { Controller, Get, Post, Headers, Body, BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { BotService } from "./bot.service";

@Controller('bot')
export class BotController {
    constructor(private readonly botService: BotService) {}

    
}