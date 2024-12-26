import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(id: Number, passwd: string, name: string, userGrade: number, 
                    major: string, creditSum: Number, majorTransfer: Boolean): Promise<User> {
        const user = new this.userModel({ 
            id, 
            passwd, 
            name, 
            userGrade,
            major: major || "Unknown",
            creditSum: creditSum || 0,
            majorTransfer: majorTransfer || false,    
        });
        return user.save();
    }


    async getUser(id: Number, passwd: string ): Promise<User> {
        Logger.debug(`Find User : ${id}, ${passwd}`);

        const user = await this.userModel.findOne({ id, passwd }).exec();

        if (!user)
        {
            throw new HttpException("No Account Match", HttpStatus.NOT_FOUND);
        }

        return user;
    }

    
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}