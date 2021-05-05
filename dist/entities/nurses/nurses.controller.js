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
exports.NursesController = void 0;
const common_1 = require("@nestjs/common");
const nurses_service_1 = require("./nurses.service");
const create_nurse_dto_1 = require("./dto/create-nurse.dto");
const update_nurse_dto_1 = require("./dto/update-nurse.dto");
let NursesController = class NursesController {
    constructor(nursesService) {
        this.nursesService = nursesService;
    }
    async create(res, createNurseDto) {
        try {
            const nurse = await this.nursesService.create(createNurseDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Nurse has been created successfully',
                nurse
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Nurse not created',
                status: 400
            });
        }
    }
    async findAll() {
        return this.nursesService.findAll();
    }
    async findOne(res, id) {
        const nurse = await this.nursesService.findOne(id);
        if (!nurse) {
            throw new common_1.NotFoundException('nurse does not exist');
        }
        else {
            return res.status(common_1.HttpStatus.OK).json(nurse);
        }
    }
    async update(res, id, updatenurseDto) {
        try {
            const nurse = await this.nursesService.update(id, updatenurseDto);
            if (!nurse) {
                throw new common_1.NotFoundException('Nurse does not exist');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Nurse has been successfully updated',
                nurse
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Nurse not updated',
                status: 400
            });
        }
    }
    async delete(res, id) {
        if (!id) {
            throw new common_1.NotFoundException('Nurse ID does not exist');
        }
        const nurse = await this.nursesService.deleteNurse(id);
        if (!nurse) {
            throw new common_1.NotFoundException('nurse does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'nurse has been deleted',
            nurse
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_nurse_dto_1.CreateNurseDTO]),
    __metadata("design:returntype", Promise)
], NursesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NursesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NursesController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_nurse_dto_1.UpdateNurseDTO]),
    __metadata("design:returntype", Promise)
], NursesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NursesController.prototype, "delete", null);
NursesController = __decorate([
    common_1.Controller('nurses'),
    __metadata("design:paramtypes", [nurses_service_1.NursesService])
], NursesController);
exports.NursesController = NursesController;
//# sourceMappingURL=nurses.controller.js.map