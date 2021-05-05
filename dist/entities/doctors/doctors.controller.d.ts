import { DoctorsService } from './doctors.service';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { Doctor } from './schema/doctor.schema';
import { UpdateDoctorDTO } from './dto/update-doctor.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    create(res: any, createDoctorDto: CreateDoctorDTO): Promise<any>;
    findAll(): Promise<Doctor[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updateDoctorDto: UpdateDoctorDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
