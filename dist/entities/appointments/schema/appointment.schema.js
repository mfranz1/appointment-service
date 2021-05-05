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
exports.AppointmentSchema = exports.Appointment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Appointment = class Appointment {
};
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }),
    __metadata("design:type", Object)
], Appointment.prototype, "patientID", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }),
    __metadata("design:type", Object)
], Appointment.prototype, "doctorID", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Appointment.prototype, "time", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Appointment.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] }),
    __metadata("design:type", Array)
], Appointment.prototype, "notes", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Appointment.prototype, "appointmentConfirmed", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Appointment.prototype, "archive", void 0);
Appointment = __decorate([
    mongoose_1.Schema()
], Appointment);
exports.Appointment = Appointment;
exports.AppointmentSchema = mongoose_1.SchemaFactory.createForClass(Appointment);
//# sourceMappingURL=appointment.schema.js.map