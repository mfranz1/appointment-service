import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDTO } from './dto/create-appointment.dto';
import { Appointment } from './schema/appointment.schema';
import { UpdateAppointmentDTO } from './dto/update-appointment.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    create(res: any, createAppointmentDto: CreateAppointmentDTO): Promise<any>;
    findAll(): Promise<Appointment[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updateAppointDto: UpdateAppointmentDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
