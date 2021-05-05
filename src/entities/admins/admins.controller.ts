import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res, Put, Delete } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { Admin } from './schema/admin.schema';
import { UpdateAdminDTO } from './dto/update-admin.dto';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) {}

    @Post()
    async create(@Res() res, @Body() createAdminDto: CreateAdminDTO) {
        //await this.adminsService.create(createAdminDto);
        try{
            const admin = await this.adminsService.create(createAdminDto);

            return res.status(HttpStatus.OK).json({
                message: 'Admin has been created successfully',
                admin
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Admin not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<Admin[]> {
        return this.adminsService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string){
        const admin = await this.adminsService.findOne(id);

        if(!admin){
            throw new NotFoundException('Admin does not exist');
        }
        else{
            return res.status(HttpStatus.OK).json(admin);
        }
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() updateAdminDto: UpdateAdminDTO) {
        //return this.AdminsService.update(id, updateAdminDto);
        try{
            const admin = await this.adminsService.update(id, updateAdminDto);

            if(!admin){
                throw new NotFoundException('Admin does not exist');
            }

            return res.status(HttpStatus.OK).json({
                message: 'Admin has been successfully updated',
                admin
            });
        }
        catch(err) {
            return res.status(HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Admin not updated',
                status: 400
            });
        }
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Admin ID does not exist');
        }

        //return this.doctorsService.deleteDoctor(id);
        const admin = await this.adminsService.deleteAdmin(id);

        if(!admin){
            throw new NotFoundException('Admin does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Admin has been deleted',
            admin
        });    
    }
}