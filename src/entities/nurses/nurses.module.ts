import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Nurse, NurseSchema } from './schema/nurse.schema';
import { NursesService } from './nurses.service';
import { NursesController } from './nurses.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Nurse.name, schema: NurseSchema }])],
    controllers: [NursesController],
    providers: [NursesService],
})
export class NursesModule{}