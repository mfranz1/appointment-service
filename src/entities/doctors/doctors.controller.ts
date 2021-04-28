import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { Doctor } from './schema/doctor.schema';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @Post()
    async create(@Body() createDoctorDto: CreateDoctorDTO) {
        await this.doctorsService.create(createDoctorDto);
    }

    @Get()
    async findAll(): Promise<Doctor[]> {
        return this.doctorsService.findAll();
    }
}