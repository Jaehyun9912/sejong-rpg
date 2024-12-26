import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(id: string, passwd: string, name: string, userGrade: number): Promise<User> {
        const user = new this.userModel({ id, passwd, name, userGrade });
        return user.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}