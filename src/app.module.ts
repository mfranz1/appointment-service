import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './entities/admins/admins.module';
import { DoctorsModule } from './entities/doctors/doctors.module';
import { NursesModule } from './entities/nurses/nurses.module';
import { PatientsModule } from './entities/patients/patients.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://amsSuperAdmin:amsSApass7@cluster0.odv0d.mongodb.net/amsDB?retryWrites=true&w=majority'),
    AdminsModule,
    DoctorsModule,
    NursesModule,
    PatientsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
