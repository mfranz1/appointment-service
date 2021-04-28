import { Body, Controller, Get, Post } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { CreateNurseDTO } from './dto/create-nurse.dto';
import { Nurse } from './schema/nurse.schema';

@Controller('nurses')
export class NursesController {
    constructor(private readonly nursesService: NursesService) {}

    @Post()
    async create(@Body() createNurseDto: CreateNurseDTO) {
        await this.nursesService.create(createNurseDto);
    }

    @Get()
    async findAll(): Promise<Nurse[]> {
        return this.nursesService.findAll();
    }
}