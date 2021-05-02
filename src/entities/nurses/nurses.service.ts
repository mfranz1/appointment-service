import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Nurse, NurseDocument } from './schema/nurse.schema';
import { CreateNurseDTO } from './dto/create-nurse.dto';
import { UpdateNurseDTO } from './dto/update-nurse.dto';

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

    async findOne(id: String): Promise<Nurse> {
        return this.nurseModel.findById(id).exec();
    }

    async update(id: String, updateNurseDto: UpdateNurseDTO): Promise<Nurse> {
        const updatedNurse = await this.nurseModel.findByIdAndUpdate({ _id: id }, updateNurseDto);

        if(!updatedNurse){
            throw new NotFoundException(`Nurse #${id} not found.`);
        }
        else{
            return updatedNurse;
        } 
    }

    async deleteNurse(id: string): Promise<any> {
        const deletedNurse = await this.nurseModel.findByIdAndRemove(id);

        return deletedNurse;
    }
}