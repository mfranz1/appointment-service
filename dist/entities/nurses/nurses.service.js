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
exports.NursesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const nurse_schema_1 = require("./schema/nurse.schema");
let NursesService = class NursesService {
    constructor(nurseModel) {
        this.nurseModel = nurseModel;
    }
    async create(createNurseDto) {
        const createdNurse = new this.nurseModel(createNurseDto);
        return createdNurse.save();
    }
    async findAll() {
        return this.nurseModel.find().exec();
    }
    async findOne(id) {
        return this.nurseModel.findById(id).exec();
    }
    async update(id, updateNurseDto) {
        const updatedNurse = await this.nurseModel.findByIdAndUpdate({ _id: id }, updateNurseDto);
        if (!updatedNurse) {
            throw new common_1.NotFoundException(`Nurse #${id} not found.`);
        }
        else {
            return updatedNurse;
        }
    }
    async deleteNurse(id) {
        const deletedNurse = await this.nurseModel.findByIdAndRemove(id);
        return deletedNurse;
    }
};
NursesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(nurse_schema_1.Nurse.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NursesService);
exports.NursesService = NursesService;
//# sourceMappingURL=nurses.service.js.map