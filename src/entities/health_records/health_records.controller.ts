import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { HealthRecordsService } from './health_records.service';
import { CreateHealthRecordDTO } from './dto/create-health_record.dto';
import { HealthRecord } from './schema/health_record.schema';
import { UpdateHealthRecordDTO } from './dto/update-health_record.dto';

@Controller('health_records')
export class HealthRecordsController {
    constructor(private readonly health_recordsService: HealthRecordsService) {}

    @Post()
    async create(@Res() res, @Body() createHealthRecordDto: CreateHealthRecordDTO) {
        //await this.HealthRecordsService.create(createHealthRecordDto);
        try{
            const healthRecord = await this.health_recordsService.create(createHealthRecordDto);

            return res.status(HttpStatus.OK).json({
                message: 'Health Record has been created successfully',
                healthRecord
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Health Record not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<HealthRecord[]> {
        return this.health_recordsService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string) {
        //return this.doctorsService.findOne(id);
        const healthRecord = await this.health_recordsService.findOne(id);

        if(!healthRecord){
            throw new NotFoundException('Health Record does not exist');
        }

        return res.status(HttpStatus.OK).json(healthRecord);
    }

    
    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() updateHealthRecordDto: UpdateHealthRecordDTO){
        try{
            const healthRecord = await this.health_recordsService.update(id, updateHealthRecordDto);

            if(!healthRecord){
                throw new NotFoundException('Health Record does not exist');
            }

            return res.status(HttpStatus.OK).json({
                message: 'Health Record has beens successfully updated',
                healthRecord,
            });
        } catch(err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Health Record could not be updated',
                status: 400
            });
        }
    }
    

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Health Record does not exist');
        }

        //return this.healthRecordsService.deletehealthRecord(id);
        const healthRecord = await this.health_recordsService.deleteHealthRecord(id);

        if(!healthRecord){
            throw new NotFoundException('Health Record does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Health Record has been deleted',
            healthRecord
        });    
    }
}