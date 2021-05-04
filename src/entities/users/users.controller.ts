import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthUserDTO } from './dto/auth-user.dto';
import { User } from './schema/user.schema';
import { Schema } from 'mongoose';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Res() res, @Body() createUserDto: CreateUserDTO) {
        try{
            const user = await this.usersService.create(createUserDto);

            return res.status(HttpStatus.OK).json({
                message: 'User has been created successfully',
                user
            });
        }
        catch(err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: "Error: User not created",
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('auth')
    async findOne(@Res() res, @Body() authUserDto: AuthUserDTO){
        const user = await this.usersService.findOne(authUserDto);

        if(!user){
            throw new NotFoundException("User does not exist");
        }
        else{
            return res.status(HttpStatus.OK).json(user);
        }
    }
}