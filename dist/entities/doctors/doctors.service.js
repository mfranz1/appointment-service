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
exports.DoctorsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const doctor_schema_1 = require("./schema/doctor.schema");
let DoctorsService = class DoctorsService {
    constructor(doctorModel) {
        this.doctorModel = doctorModel;
    }
    async create(createDoctorDto) {
        const createdDoctor = new this.doctorModel(createDoctorDto);
        return createdDoctor.save();
    }
    async findAll() {
        return this.doctorModel.find().exec();
    }
    async findOne(id) {
        return this.doctorModel.findById(id).exec();
    }
    async update(id, updateDoctorDto) {
        const updatedCustomer = await this.doctorModel.findByIdAndUpdate({ _id: id }, updateDoctorDto);
        if (!updatedCustomer) {
            throw new common_1.NotFoundException(`Doctor #${id} not found.`);
        }
        else {
            return updatedCustomer;
        }
    }
    async deleteDoctor(id) {
        const deletedDoctor = await this.doctorModel.findByIdAndRemove(id);
        return deletedDoctor;
    }
};
DoctorsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DoctorsService);
exports.DoctorsService = DoctorsService;
//# sourceMappingURL=doctors.service.js.map