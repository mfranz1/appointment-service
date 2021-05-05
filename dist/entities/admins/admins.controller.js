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
exports.AdminsController = void 0;
const common_1 = require("@nestjs/common");
const admins_service_1 = require("./admins.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
let AdminsController = class AdminsController {
    constructor(adminsService) {
        this.adminsService = adminsService;
    }
    async create(res, createAdminDto) {
        try {
            const admin = await this.adminsService.create(createAdminDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Admin has been created successfully',
                admin
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Admin not created',
                status: 400
            });
        }
    }
    async findAll() {
        return this.adminsService.findAll();
    }
    async findOne(res, id) {
        const admin = await this.adminsService.findOne(id);
        if (!admin) {
            throw new common_1.NotFoundException('Admin does not exist');
        }
        else {
            return res.status(common_1.HttpStatus.OK).json(admin);
        }
    }
    async update(res, id, updateAdminDto) {
        try {
            const admin = await this.adminsService.update(id, updateAdminDto);
            if (!admin) {
                throw new common_1.NotFoundException('Admin does not exist');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Admin has been successfully updated',
                admin
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Admin not updated',
                status: 400
            });
        }
    }
    async delete(res, id) {
        if (!id) {
            throw new common_1.NotFoundException('Admin ID does not exist');
        }
        const admin = await this.adminsService.deleteAdmin(id);
        if (!admin) {
            throw new common_1.NotFoundException('Admin does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Admin has been deleted',
            admin
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_admin_dto_1.CreateAdminDTO]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_admin_dto_1.UpdateAdminDTO]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "delete", null);
AdminsController = __decorate([
    common_1.Controller('admins'),
    __metadata("design:paramtypes", [admins_service_1.AdminsService])
], AdminsController);
exports.AdminsController = AdminsController;
//# sourceMappingURL=admins.controller.js.map