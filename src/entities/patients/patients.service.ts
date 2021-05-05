import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient, PatientDocument } from './schema/patient.schema';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { UpdatePatientDTO } from './dto/update-patient.dto';

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

    async findOne(id: String): Promise<Patient> {
        return this.patientModel.findById(id).exec();
    }

    async update(id: String, updatePatientDto: UpdatePatientDTO): Promise<Patient> {
        const updatedPatient = await this.patientModel.findByIdAndUpdate({ _id: id }, updatePatientDto);

        if(!updatedPatient){
            throw new NotFoundException(`Patient #${id} not found.`);
        }
        else{
            return updatedPatient;
        } 
    }

    async deletePatient(id: string): Promise<any> {
        const deletedPatient = await this.patientModel.findByIdAndRemove(id);

        return deletedPatient;
    }
}