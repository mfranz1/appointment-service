import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HealthRecord, HealthRecordDocument } from './schema/health_record.schema';
import { CreateHealthRecordDTO } from './dto/create-health_record.dto';
import { UpdateHealthRecordDTO } from './dto/update-health_record.dto';

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

    async findOne(id: String): Promise<HealthRecord> {
        return this.health_recordModel.findById(id).exec();
    }

    
    async update(id: string, updateHealthRecordDto: UpdateHealthRecordDTO): Promise<HealthRecord>{
        const HealthRecord = await this.health_recordModel.findByIdAndUpdate(
            { _id: id },
            updateHealthRecordDto,
        );

        return HealthRecord;
        
    }
    

    async deleteHealthRecord(id: string): Promise<any> {
        const deletedHealthRecord = await this.health_recordModel.findByIdAndRemove(id);
        
        return deletedHealthRecord;
    }
}