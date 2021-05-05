import { PatientsService } from './patients.service';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './schema/patient.schema';
import { UpdatePatientDTO } from './dto/update-patient.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(res: any, createPatientDto: CreatePatientDTO): Promise<any>;
    findAll(): Promise<Patient[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updatePatientDto: UpdatePatientDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
