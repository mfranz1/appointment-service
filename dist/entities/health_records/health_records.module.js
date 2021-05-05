"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRecordsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const health_record_schema_1 = require("./schema/health_record.schema");
const health_records_service_1 = require("./health_records.service");
const health_records_controller_1 = require("./health_records.controller");
let HealthRecordsModule = class HealthRecordsModule {
};
HealthRecordsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: health_record_schema_1.HealthRecord.name, schema: health_record_schema_1.HealthRecordSchema }])],
        controllers: [health_records_controller_1.HealthRecordsController],
        providers: [health_records_service_1.HealthRecordsService],
    })
], HealthRecordsModule);
exports.HealthRecordsModule = HealthRecordsModule;
//# sourceMappingURL=health_records.module.js.map