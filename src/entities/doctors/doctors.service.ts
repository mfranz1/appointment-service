import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { CreateDoctorDTO } from './dto/create-doctor.dto';

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
}