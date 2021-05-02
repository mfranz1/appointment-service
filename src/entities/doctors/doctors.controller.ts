import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { Doctor } from './schema/doctor.schema';
import { UpdateDoctorDTO } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @Post()
    async create(@Res() res, @Body() createDoctorDto: CreateDoctorDTO) {
        //await this.doctorsService.create(createDoctorDto);
        try{
            const doctor = await this.doctorsService.create(createDoctorDto);

            return res.status(HttpStatus.OK).json({
                message: 'Doctor has been created successfully',
                doctor
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Doctor not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<Doctor[]> {
        return this.doctorsService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string) {
        //return this.doctorsService.findOne(id);
        const doctor = await this.doctorsService.findOne(id);

        if(!doctor){
            throw new NotFoundException('Doctor does not exist');
        }

        return res.status(HttpStatus.OK).json(doctor);
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDTO) {
        //return this.doctorsService.update(id, updateDoctorDto);
        try{
            const doctor = await this.doctorsService.update(id, updateDoctorDto);

            if(!doctor){
                throw new NotFoundException('Doctor does not exist');
            }

            return res.status(HttpStatus.OK).json({
                message: 'Doctor has been successfully updated',
                doctor
            });
        }
        catch(err) {
            return res.status(HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Doctor not updated',
                status: 400
            });
        }
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Doctor ID does not exist');
        }

        //return this.doctorsService.deleteDoctor(id);
        const doctor = await this.doctorsService.deleteDoctor(id);

        if(!doctor){
            throw new NotFoundException('Doctor does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Doctor has been deleted',
            doctor
        });    
    }
}
