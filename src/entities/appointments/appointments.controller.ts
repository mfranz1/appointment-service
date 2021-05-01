import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDTO } from './dto/create-appointment.dto';
import { Appointment } from './schema/appointment.schema';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Post()
    async create(@Body() createAppointmentDto: CreateAppointmentDTO){
        await this.appointmentsService.create(createAppointmentDto);
    }

    @Get()
    async findAll(): Promise<Appointment[]> {
        return this.appointmentsService.findAll();
    }
}