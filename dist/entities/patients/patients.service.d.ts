import { Model } from 'mongoose';
import { Patient, PatientDocument } from './schema/patient.schema';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { UpdatePatientDTO } from './dto/update-patient.dto';
export declare class PatientsService {
    private patientModel;
    constructor(patientModel: Model<PatientDocument>);
    create(createPatientDto: CreatePatientDTO): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findOne(id: String): Promise<Patient>;
    update(id: String, updatePatientDto: UpdatePatientDTO): Promise<Patient>;
    deletePatient(id: string): Promise<any>;
}
