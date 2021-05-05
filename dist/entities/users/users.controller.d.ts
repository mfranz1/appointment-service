import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthUserDTO } from './dto/auth-user.dto';
import { User } from './schema/user.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(res: any, createUserDto: CreateUserDTO): Promise<any>;
    findAll(): Promise<User[]>;
    findOne(res: any, authUserDto: AuthUserDTO): Promise<any>;
}
