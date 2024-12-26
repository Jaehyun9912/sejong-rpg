import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./schemas/user.schema";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.createUser(user.id, user.passwd, user.name, user.userGrade);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}