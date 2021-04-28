import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './schema/patient.schema';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Post()
    async create(@Body() createPatientDto: CreatePatientDTO) {
        await this.patientsService.create(createPatientDto);
    }

    @Get()
    async findAll(): Promise<Patient[]> {
        return this.patientsService.findAll();
    }
}