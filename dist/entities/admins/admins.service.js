"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const admin_schema_1 = require("./schema/admin.schema");
let AdminsService = class AdminsService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async create(createAdminDto) {
        const createdAdmin = new this.adminModel(createAdminDto);
        return createdAdmin.save();
    }
    async findAll() {
        return this.adminModel.find().exec();
    }
    async findOne(id) {
        return this.adminModel.findById(id).exec();
    }
    async update(id, updateAdminDto) {
        const updatedAdmin = await this.adminModel.findByIdAndUpdate({ _id: id }, updateAdminDto);
        if (!updatedAdmin) {
            throw new common_1.NotFoundException(`Admin #${id} not found.`);
        }
        else {
            return updatedAdmin;
        }
    }
    async deleteAdmin(id) {
        const deletedAdmin = await this.adminModel.findByIdAndRemove(id);
        return deletedAdmin;
    }
};
AdminsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AdminsService);
exports.AdminsService = AdminsService;
//# sourceMappingURL=admins.service.js.map