import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './schema/patient.schema';
import { UpdatePatientDTO } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Post()
    async create(@Res() res, @Body() createPatientDto: CreatePatientDTO) {
        //await this.PatientsService.create(createPatientDto);
        try{
            const patient = await this.patientsService.create(createPatientDto);

            return res.status(HttpStatus.OK).json({
                message: 'Patient has been created successfully',
                patient
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Patient not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<Patient[]> {
        return this.patientsService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string){
        const patient = await this.patientsService.findOne(id);

        if(!patient){
            throw new NotFoundException('patient does not exist');
        }
        else{
            return res.status(HttpStatus.OK).json(patient);
        }
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() updatePatientDto: UpdatePatientDTO) {
        //return this.patientsService.update(id, updatepatientDto);
        try{
            const patient = await this.patientsService.update(id, updatePatientDto);

            if(!patient){
                throw new NotFoundException('patient does not exist');
            }

            return res.status(HttpStatus.OK).json({
                message: 'patient has been successfully updated',
                patient
            });
        }
        catch(err) {
            return res.status(HttpStatus.BAD_GATEWAY).json({
                message: 'Error: patient not updated',
                status: 400
            });
        }
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Patient ID does not exist');
        }

        //return this.doctorsService.deleteDoctor(id);
        const patient = await this.patientsService.deletePatient(id);

        if(!patient){
            throw new NotFoundException('patient does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'patient has been deleted',
            patient
        });    
    }
}