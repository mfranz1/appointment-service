import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment, AppointmentDocument } from './schema/appointment.schema';
import { CreateAppointmentDTO } from './dto/create-appointment.dto';
import { UpdateAppointmentDTO } from './dto/update-appointment.dto';

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

    async findOne(id: String): Promise<Appointment> {
        return this.appointmentModel.findById(id).exec();
    }

    
    async update(id: string, updateAppointDto: UpdateAppointmentDTO): Promise<Appointment>{
        const appointment = await this.appointmentModel.findByIdAndUpdate(
            { _id: id },
            updateAppointDto,
        );

        return appointment;
        
    }
    

    async deleteAppointment(id: string): Promise<any> {
        const deletedAppointment = await this.appointmentModel.findByIdAndRemove(id);
        
        return deletedAppointment;
    }
}