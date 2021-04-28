import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient, PatientDocument } from './schema/patient.schema';
import { CreatePatientDTO } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
    constructor(
        @InjectModel(Patient.name) private patientModel: Model<PatientDocument>
    ) {}

    async create(createPatientDto: CreatePatientDTO): Promise<Patient> {
        const createdPatient = new this.patientModel(createPatientDto);
        return createdPatient.save();
    }

    async findAll(): Promise<Patient[]> {
        return this.patientModel.find().exec();
    }
}