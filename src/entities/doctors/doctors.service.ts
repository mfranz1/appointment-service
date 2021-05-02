import { Model, Mongoose } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { UpdateDoctorDTO } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>
    ) {}

    async create(createDoctorDto: CreateDoctorDTO): Promise<Doctor> {
        const createdDoctor = new this.doctorModel(createDoctorDto);
        return createdDoctor.save();
    }

    async findAll(): Promise<Doctor[]> {
        return this.doctorModel.find().exec();
    }

    async findOne(id: String): Promise<Doctor> {
        return this.doctorModel.findById(id).exec();
    }

    async update(id: String, updateDoctorDto: UpdateDoctorDTO): Promise<Doctor> {
        const updatedCustomer = await this.doctorModel.findByIdAndUpdate({ _id: id }, updateDoctorDto);

        if(!updatedCustomer){
            throw new NotFoundException(`Doctor #${id} not found.`);
        }
        else{
            return updatedCustomer;
        } 
    }

    async deleteDoctor(id: string): Promise<any> {
        const deletedDoctor = await this.doctorModel.findByIdAndRemove(id);
        
        return deletedDoctor;
    }
}