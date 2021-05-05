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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientSchema = exports.Patient = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Patient = class Patient {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "fName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "middleInitial", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "lName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "dob", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: Number }
    })),
    __metadata("design:type", Object)
], Patient.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Patient.prototype, "primaryPhone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Patient.prototype, "secondaryPhone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Patient.prototype, "gender", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Patient.prototype, "ssn", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        fName: { type: String },
        lName: { type: String },
        phone: { type: Number }
    })),
    __metadata("design:type", Object)
], Patient.prototype, "emergencyContact", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        policyNumber: { type: Number },
        groupNumber: { type: Number },
        policyHolder: {
            type: {
                fName: String,
                lName: String,
                ssn: Number,
                dob: String
            }
        }
    })),
    __metadata("design:type", Object)
], Patient.prototype, "insurance", void 0);
Patient = __decorate([
    mongoose_1.Schema()
], Patient);
exports.Patient = Patient;
exports.PatientSchema = mongoose_1.SchemaFactory.createForClass(Patient);
//# sourceMappingURL=patient.schema.js.map