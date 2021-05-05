"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const admins_module_1 = require("./entities/admins/admins.module");
const doctors_module_1 = require("./entities/doctors/doctors.module");
const nurses_module_1 = require("./entities/nurses/nurses.module");
const patients_module_1 = require("./entities/patients/patients.module");
const health_records_module_1 = require("./entities/health_records/health_records.module");
const notes_module_1 = require("./entities/notes/notes.module");
const appointments_module_1 = require("./entities/appointments/appointments.module");
const users_module_1 = require("./entities/users/users.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://amsSuperAdmin:amsSApass7@cluster0.odv0d.mongodb.net/amsDB?retryWrites=true&w=majority'),
            admins_module_1.AdminsModule,
            doctors_module_1.DoctorsModule,
            nurses_module_1.NursesModule,
            patients_module_1.PatientsModule,
            health_records_module_1.HealthRecordsModule,
            notes_module_1.NotesModule,
            appointments_module_1.AppointmentsModule,
            users_module_1.UsersModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map