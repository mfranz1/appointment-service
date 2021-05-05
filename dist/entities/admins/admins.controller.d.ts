import { AdminsService } from './admins.service';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { Admin } from './schema/admin.schema';
import { UpdateAdminDTO } from './dto/update-admin.dto';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    create(res: any, createAdminDto: CreateAdminDTO): Promise<any>;
    findAll(): Promise<Admin[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updateAdminDto: UpdateAdminDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
