import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './schema/appointment.schema';
import { CreateAppointmentDTO } from './dto/create-appointment.dto';
import { UpdateAppointmentDTO } from './dto/update-appointment.dto';
export declare class AppointmentsService {
    private appointmentModel;
    constructor(appointmentModel: Model<AppointmentDocument>);
    create(createAppointmentDto: CreateAppointmentDTO): Promise<Appointment>;
    findAll(): Promise<Appointment[]>;
    findOne(id: String): Promise<Appointment>;
    update(id: string, updateAppointDto: UpdateAppointmentDTO): Promise<Appointment>;
    deleteAppointment(id: string): Promise<any>;
}
