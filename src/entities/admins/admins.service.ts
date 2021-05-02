import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schema/admin.schema';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { UpdateAdminDTO } from './dto/update-admin.dto';

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

    async findOne(id: String): Promise<Admin> {
        return this.adminModel.findById(id).exec();
    }

    async update(id: String, updateAdminDto: UpdateAdminDTO): Promise<Admin> {
        const updatedAdmin = await this.adminModel.findByIdAndUpdate({ _id: id }, updateAdminDto);

        if(!updatedAdmin){
            throw new NotFoundException(`Admin #${id} not found.`);
        }
        else{
            return updatedAdmin;
        } 
    }

    async deleteAdmin(id: string): Promise<any> {
        const deletedAdmin = await this.adminModel.findByIdAndRemove(id);

        return deletedAdmin;
    }
}