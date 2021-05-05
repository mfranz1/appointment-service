import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthUserDTO } from './dto/auth-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDTO): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(authUserDto: AuthUserDTO): Promise<User>;
}
