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
exports.HealthRecordsController = void 0;
const common_1 = require("@nestjs/common");
const health_records_service_1 = require("./health_records.service");
const create_health_record_dto_1 = require("./dto/create-health_record.dto");
const update_health_record_dto_1 = require("./dto/update-health_record.dto");
let HealthRecordsController = class HealthRecordsController {
    constructor(health_recordsService) {
        this.health_recordsService = health_recordsService;
    }
    async create(res, createHealthRecordDto) {
        try {
            const healthRecord = await this.health_recordsService.create(createHealthRecordDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Health Record has been created successfully',
                healthRecord
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Health Record not created',
                status: 400
            });
        }
    }
    async findAll() {
        return this.health_recordsService.findAll();
    }
    async findOne(res, id) {
        const healthRecord = await this.health_recordsService.findOne(id);
        if (!healthRecord) {
            throw new common_1.NotFoundException('Health Record does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json(healthRecord);
    }
    async update(res, id, updateHealthRecordDto) {
        try {
            const healthRecord = await this.health_recordsService.update(id, updateHealthRecordDto);
            if (!healthRecord) {
                throw new common_1.NotFoundException('Health Record does not exist');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Health Record has beens successfully updated',
                healthRecord,
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Health Record could not be updated',
                status: 400
            });
        }
    }
    async delete(res, id) {
        if (!id) {
            throw new common_1.NotFoundException('Health Record does not exist');
        }
        const healthRecord = await this.health_recordsService.deleteHealthRecord(id);
        if (!healthRecord) {
            throw new common_1.NotFoundException('Health Record does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Health Record has been deleted',
            healthRecord
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_health_record_dto_1.CreateHealthRecordDTO]),
    __metadata("design:returntype", Promise)
], HealthRecordsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthRecordsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HealthRecordsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_health_record_dto_1.UpdateHealthRecordDTO]),
    __metadata("design:returntype", Promise)
], HealthRecordsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HealthRecordsController.prototype, "delete", null);
HealthRecordsController = __decorate([
    common_1.Controller('health_records'),
    __metadata("design:paramtypes", [health_records_service_1.HealthRecordsService])
], HealthRecordsController);
exports.HealthRecordsController = HealthRecordsController;
//# sourceMappingURL=health_records.controller.js.map