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
exports.HealthRecordSchema = exports.HealthRecord = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let HealthRecord = class HealthRecord {
};
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }),
    __metadata("design:type", Object)
], HealthRecord.prototype, "patientID", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], HealthRecord.prototype, "primaryDopctor", void 0);
__decorate([
    mongoose_1.Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }] }),
    __metadata("design:type", Array)
], HealthRecord.prototype, "appointments", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        vitals: {
            type: {
                height: String,
                weight: Number,
                bloodPressure: String,
                temp: Number
            }
        }
    })),
    __metadata("design:type", Object)
], HealthRecord.prototype, "patientHealthRecord", void 0);
__decorate([
    mongoose_1.Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] }),
    __metadata("design:type", Array)
], HealthRecord.prototype, "notes", void 0);
HealthRecord = __decorate([
    mongoose_1.Schema()
], HealthRecord);
exports.HealthRecord = HealthRecord;
exports.HealthRecordSchema = mongoose_1.SchemaFactory.createForClass(HealthRecord);
//# sourceMappingURL=health_record.schema.js.map