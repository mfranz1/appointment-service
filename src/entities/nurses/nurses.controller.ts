import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { CreateNurseDTO } from './dto/create-nurse.dto';
import { Nurse } from './schema/nurse.schema';
import { UpdateNurseDTO } from './dto/update-nurse.dto';

@Controller('nurses')
export class NursesController {
    constructor(private readonly nursesService: NursesService) {}

    @Post()
    async create(@Res() res, @Body() createNurseDto: CreateNurseDTO) {
        //await this.NursesService.create(createNurseDto);
        try{
            const nurse = await this.nursesService.create(createNurseDto);

            return res.status(HttpStatus.OK).json({
                message: 'Nurse has been created successfully',
                nurse
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Nurse not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<Nurse[]> {
        return this.nursesService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string){
        const nurse = await this.nursesService.findOne(id);

        if(!nurse){
            throw new NotFoundException('nurse does not exist');
        }
        else{
            return res.status(HttpStatus.OK).json(nurse);
        }
    }

    
    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() updatenurseDto: UpdateNurseDTO) {
        //return this.nursesService.update(id, updatenurseDto);
        try{
            const nurse = await this.nursesService.update(id, updatenurseDto);

            if(!nurse){
                throw new NotFoundException('Nurse does not exist');
            }

            return res.status(HttpStatus.OK).json({
                message: 'Nurse has been successfully updated',
                nurse
            });
        }
        catch(err) {
            return res.status(HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Nurse not updated',
                status: 400
            });
        }
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Nurse ID does not exist');
        }

        //return this.doctorsService.deleteDoctor(id);
        const nurse = await this.nursesService.deleteNurse(id);

        if(!nurse){
            throw new NotFoundException('nurse does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'nurse has been deleted',
            nurse
        });    
    }
}