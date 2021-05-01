import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthRecord, HealthRecordSchema } from './schema/health_record.schema';
import { HealthRecordsService } from './health_records.service';
import { HealthRecordsController } from './health_records.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: HealthRecord.name, schema: HealthRecordSchema }])],
    controllers: [HealthRecordsController],
    providers: [HealthRecordsService],
})
export class HealthRecordsModule{}