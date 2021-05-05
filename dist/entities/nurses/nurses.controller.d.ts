import { NursesService } from './nurses.service';
import { CreateNurseDTO } from './dto/create-nurse.dto';
import { Nurse } from './schema/nurse.schema';
import { UpdateNurseDTO } from './dto/update-nurse.dto';
export declare class NursesController {
    private readonly nursesService;
    constructor(nursesService: NursesService);
    create(res: any, createNurseDto: CreateNurseDTO): Promise<any>;
    findAll(): Promise<Nurse[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updatenurseDto: UpdateNurseDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
