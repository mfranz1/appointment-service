import { Body, Controller, Get, Post } from '@nestjs/common';
import { HealthRecordsService } from './health_records.service';
import { CreateHealthRecordDTO } from './dto/create-health_record.dto';
import { HealthRecord } from './schema/health_record.schema';

@Controller('health_records')
export class HealthRecordsController {
    constructor(private readonly health_recordsService: HealthRecordsService) {}

    @Post()
    async create(@Body() createHealthRecordDto: CreateHealthRecordDTO) {
        await this.health_recordsService.create(createHealthRecordDto);
    }

    @Get()
    async findAll(): Promise<HealthRecord[]> {
        return this.health_recordsService.findAll();
    }
}