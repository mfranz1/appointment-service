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
exports.DoctorsController = void 0;
const common_1 = require("@nestjs/common");
const doctors_service_1 = require("./doctors.service");
const create_doctor_dto_1 = require("./dto/create-doctor.dto");
const update_doctor_dto_1 = require("./dto/update-doctor.dto");
let DoctorsController = class DoctorsController {
    constructor(doctorsService) {
        this.doctorsService = doctorsService;
    }
    async create(res, createDoctorDto) {
        try {
            const doctor = await this.doctorsService.create(createDoctorDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Doctor has been created successfully',
                doctor
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Doctor not created',
                status: 400
            });
        }
    }
    async findAll() {
        return this.doctorsService.findAll();
    }
    async findOne(res, id) {
        const doctor = await this.doctorsService.findOne(id);
        if (!doctor) {
            throw new common_1.NotFoundException('Doctor does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json(doctor);
    }
    async update(res, id, updateDoctorDto) {
        try {
            const doctor = await this.doctorsService.update(id, updateDoctorDto);
            if (!doctor) {
                throw new common_1.NotFoundException('Doctor does not exist');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Doctor has been successfully updated',
                doctor
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Doctor not updated',
                status: 400
            });
        }
    }
    async delete(res, id) {
        if (!id) {
            throw new common_1.NotFoundException('Doctor ID does not exist');
        }
        const doctor = await this.doctorsService.deleteDoctor(id);
        if (!doctor) {
            throw new common_1.NotFoundException('Doctor does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Doctor has been deleted',
            doctor
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_doctor_dto_1.CreateDoctorDTO]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_doctor_dto_1.UpdateDoctorDTO]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "delete", null);
DoctorsController = __decorate([
    common_1.Controller('doctors'),
    __metadata("design:paramtypes", [doctors_service_1.DoctorsService])
], DoctorsController);
exports.DoctorsController = DoctorsController;
//# sourceMappingURL=doctors.controller.js.map