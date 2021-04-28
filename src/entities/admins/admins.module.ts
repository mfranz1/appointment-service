import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './schema/admin.schema';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
    controllers: [AdminsController],
    providers: [AdminsService],
})
export class AdminsModule{}