import { Model } from 'mongoose';
import { HealthRecord, HealthRecordDocument } from './schema/health_record.schema';
import { CreateHealthRecordDTO } from './dto/create-health_record.dto';
import { UpdateHealthRecordDTO } from './dto/update-health_record.dto';
export declare class HealthRecordsService {
    private health_recordModel;
    constructor(health_recordModel: Model<HealthRecordDocument>);
    create(createHealthRecordDto: CreateHealthRecordDTO): Promise<HealthRecord>;
    findAll(): Promise<HealthRecord[]>;
    findOne(id: String): Promise<HealthRecord>;
    update(id: string, updateHealthRecordDto: UpdateHealthRecordDTO): Promise<HealthRecord>;
    deleteHealthRecord(id: string): Promise<any>;
}
