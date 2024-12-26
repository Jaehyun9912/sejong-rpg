import { Controller, Get, Post, Headers, Body, BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./schemas/user.schema";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.createUser(
            user.id, 
            user.passwd,
            user.name, 
            user.userGrade,
            user.major,
            user.creditSum,
            user.majorTransfer,
            );
    }


    @Get()
    async getUser(@Headers() headers: Record<string, string>): Promise<User> {
        const id = Number(headers['id']);
        const passwd = headers['passwd'];

        if (!id || !passwd)
        {
            throw new HttpException("Missing ID or Password", HttpStatus.BAD_REQUEST);
        }

        return this.usersService.getUser(id, passwd);
    }

    
    @Get('all')
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}