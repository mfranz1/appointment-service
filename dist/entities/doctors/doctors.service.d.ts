import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { UpdateDoctorDTO } from './dto/update-doctor.dto';
export declare class DoctorsService {
    private doctorModel;
    constructor(doctorModel: Model<DoctorDocument>);
    create(createDoctorDto: CreateDoctorDTO): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    findOne(id: String): Promise<Doctor>;
    update(id: String, updateDoctorDto: UpdateDoctorDTO): Promise<Doctor>;
    deleteDoctor(id: string): Promise<any>;
}
