import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { Admin } from './schema/admin.schema';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) {}

    @Post()
    async create(@Body() createAdminDto: CreateAdminDTO) {
        await this.adminsService.create(createAdminDto);
    }

    @Get()
    async findAll(): Promise<Admin[]> {
        return this.adminsService.findAll();
    }
}