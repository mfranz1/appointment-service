import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment, AppointmentDocument } from './schema/appointment.schema';
import { CreateAppointmentDTO } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
    constructor(
        @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>
    ) {}

    async create(createAppointmentDto: CreateAppointmentDTO): Promise<Appointment> {
        const createdAppointment = new this.appointmentModel(createAppointmentDto);
        return createdAppointment.save();
    }

    async findAll(): Promise<Appointment[]> {
        return this.appointmentModel.find().exec();
    }
}