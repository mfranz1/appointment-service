import { Model } from 'mongoose';
import { Admin, AdminDocument } from './schema/admin.schema';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { UpdateAdminDTO } from './dto/update-admin.dto';
export declare class AdminsService {
    private adminModel;
    constructor(adminModel: Model<AdminDocument>);
    create(createAdminDto: CreateAdminDTO): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: String): Promise<Admin>;
    update(id: String, updateAdminDto: UpdateAdminDTO): Promise<Admin>;
    deleteAdmin(id: string): Promise<any>;
}
