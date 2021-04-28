import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Nurse, NurseDocument } from './schema/nurse.schema';
import { CreateNurseDTO } from './dto/create-nurse.dto';

@Injectable()
export class NursesService {
    constructor(
        @InjectModel(Nurse.name) private nurseModel: Model<NurseDocument>
    ) {}

    async create(createNurseDto: CreateNurseDTO): Promise<Nurse> {
        const createdNurse = new this.nurseModel(createNurseDto);
        return createdNurse.save();
    }

    async findAll(): Promise<Nurse[]> {
        return this.nurseModel.find().exec();
    }
}