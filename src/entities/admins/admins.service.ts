import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schema/admin.schema';
import { CreateAdminDTO } from './dto/create-admin.dto';

@Injectable()
export class AdminsService {
    constructor(
        @InjectModel(Admin.name) private adminModel: Model<AdminDocument>
    ) {}

    async create(createAdminDto: CreateAdminDTO): Promise<Admin> {
        const createdAdmin = new this.adminModel(createAdminDto);
        return createdAdmin.save();
    }

    async findAll(): Promise<Admin[]> {
        return this.adminModel.find().exec();
    }
}