import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDTO } from './dto/create-appointment.dto';
import { Appointment } from './schema/appointment.schema';
import { UpdateAppointmentDTO } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Post()
    async create(@Res() res, @Body() createAppointmentDto: CreateAppointmentDTO) {
        //await this.AppointmentsService.create(createAppointmentDto);
        try{
            const appointment = await this.appointmentsService.create(createAppointmentDto);

            return res.status(HttpStatus.OK).json({
                message: 'Appointment has been created successfully',
                appointment
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Appointment not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<Appointment[]> {
        return this.appointmentsService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string) {
        //return this.doctorsService.findOne(id);
        const appointment = await this.appointmentsService.findOne(id);

        if(!appointment){
            throw new NotFoundException('Appointment does not exist');
        }

        return res.status(HttpStatus.OK).json(appointment);
    }

    
    @Put(':id')
    async update(
        @Res() res,
        @Param('id') id: string,
        @Body() updateAppointDto: UpdateAppointmentDTO,
    ){
        try{
            const appointment = await this.appointmentsService.update(
                id,
                updateAppointDto,
            );
            if(!appointment){
                throw new NotFoundException('Appointment does not exist');
            }
            return res.status(HttpStatus.OK).json({
                message: 'Appointment has been successfully updated',
                appointment,
            });
        } catch(err){
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Appointment could not be updated',
                status: 400
            });
        }
    }
    

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Appointment ID does not exist');
        }

        //return this.appointmentsService.deleteappointment(id);
        const appointment = await this.appointmentsService.deleteAppointment(id);

        if(!appointment){
            throw new NotFoundException('Appointment does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Appointment has been deleted',
            appointment
        });    
    }
}