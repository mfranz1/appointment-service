import { Model } from 'mongoose';
import { Nurse, NurseDocument } from './schema/nurse.schema';
import { CreateNurseDTO } from './dto/create-nurse.dto';
import { UpdateNurseDTO } from './dto/update-nurse.dto';
export declare class NursesService {
    private nurseModel;
    constructor(nurseModel: Model<NurseDocument>);
    create(createNurseDto: CreateNurseDTO): Promise<Nurse>;
    findAll(): Promise<Nurse[]>;
    findOne(id: String): Promise<Nurse>;
    update(id: String, updateNurseDto: UpdateNurseDTO): Promise<Nurse>;
    deleteNurse(id: string): Promise<any>;
}
