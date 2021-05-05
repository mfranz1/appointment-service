import { HealthRecordsService } from './health_records.service';
import { CreateHealthRecordDTO } from './dto/create-health_record.dto';
import { HealthRecord } from './schema/health_record.schema';
import { UpdateHealthRecordDTO } from './dto/update-health_record.dto';
export declare class HealthRecordsController {
    private readonly health_recordsService;
    constructor(health_recordsService: HealthRecordsService);
    create(res: any, createHealthRecordDto: CreateHealthRecordDTO): Promise<any>;
    findAll(): Promise<HealthRecord[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updateHealthRecordDto: UpdateHealthRecordDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
