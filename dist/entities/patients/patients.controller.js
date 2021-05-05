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
exports.PatientsController = void 0;
const common_1 = require("@nestjs/common");
const patients_service_1 = require("./patients.service");
const create_patient_dto_1 = require("./dto/create-patient.dto");
const update_patient_dto_1 = require("./dto/update-patient.dto");
let PatientsController = class PatientsController {
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    async create(res, createPatientDto) {
        try {
            const patient = await this.patientsService.create(createPatientDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Patient has been created successfully',
                patient
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Patient not created',
                status: 400
            });
        }
    }
    async findAll() {
        return this.patientsService.findAll();
    }
    async findOne(res, id) {
        const patient = await this.patientsService.findOne(id);
        if (!patient) {
            throw new common_1.NotFoundException('patient does not exist');
        }
        else {
            return res.status(common_1.HttpStatus.OK).json(patient);
        }
    }
    async update(res, id, updatePatientDto) {
        try {
            const patient = await this.patientsService.update(id, updatePatientDto);
            if (!patient) {
                throw new common_1.NotFoundException('patient does not exist');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'patient has been successfully updated',
                patient
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json({
                message: 'Error: patient not updated',
                status: 400
            });
        }
    }
    async delete(res, id) {
        if (!id) {
            throw new common_1.NotFoundException('Patient ID does not exist');
        }
        const patient = await this.patientsService.deletePatient(id);
        if (!patient) {
            throw new common_1.NotFoundException('patient does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'patient has been deleted',
            patient
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_patient_dto_1.CreatePatientDTO]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_patient_dto_1.UpdatePatientDTO]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "delete", null);
PatientsController = __decorate([
    common_1.Controller('patients'),
    __metadata("design:paramtypes", [patients_service_1.PatientsService])
], PatientsController);
exports.PatientsController = PatientsController;
//# sourceMappingURL=patients.controller.js.map