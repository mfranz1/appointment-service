import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HealthRecord, HealthRecordDocument } from './schema/health_record.schema';
import { CreateHealthRecordDTO } from './dto/create-health_record.dto';

@Injectable()
export class HealthRecordsService {
    constructor(
        @InjectModel(HealthRecord.name) private health_recordModel: Model<HealthRecordDocument> 
    ) {}

    async create(createHealthRecordDto: CreateHealthRecordDTO): Promise<HealthRecord> {
        const createdHealtRecord = new this.health_recordModel(createHealthRecordDto);
        return createdHealtRecord.save();
    }

    async findAll(): Promise<HealthRecord[]> {
        return this.health_recordModel.find().exec();
    }
}