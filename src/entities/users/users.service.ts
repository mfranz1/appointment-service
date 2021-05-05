import { Model, Schema as MongooseSchema } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthUserDTO } from './dto/auth-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async create(createUserDto: CreateUserDTO): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(authUserDto: AuthUserDTO): Promise<User> {

        //console.log(authUserDto);
        
        const user = await this.userModel.findOne({email: authUserDto.email, password: authUserDto.password}).exec();

        return user; 
    }
}