import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesServices } from './notes.service';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './schema/note.schema';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesServices) {}

    @Post()
    async create(@Body() createNoteDtp: CreateNoteDTO) {
        await this.notesService.create(createNoteDtp);
    }

    @Get()
    async findAll(): Promise<Note[]> {
        return this.notesService.findAll();
    }
}