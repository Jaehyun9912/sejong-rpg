import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class BotService {
    constructor() {}
    
    async func(): Promise<void> {
        // return null
    }
}