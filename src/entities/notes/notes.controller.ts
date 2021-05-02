import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { NotesServices } from './notes.service';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './schema/note.schema';
import { UpdateNoteDTO } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesServices) {}

    @Post()
    async create(@Res() res, @Body() createNoteDto: CreateNoteDTO) {
        //await this.NotesService.create(createNoteDto);
        try{
            const note = await this.notesService.create(createNoteDto);

            return res.status(HttpStatus.OK).json({
                message: 'Note has been created successfully',
                note
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Note not created',
                status: 400
            });
        }
    }

    @Get()
    async findAll(): Promise<Note[]> {
        return this.notesService.findAll();
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id: string){
        const note = await this.notesService.findOne(id);

        if(!note){
            throw new NotFoundException('Note does not exist');
        }
        else{
            return res.status(HttpStatus.OK).json(note);
        }
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() updateNoteDto: UpdateNoteDTO) {
        //return this.noteService.update(id, updateNoteDto);
        try{
            const note = await this.notesService.update(id, updateNoteDto);

            if(!note){
                throw new NotFoundException('Note does not exist');
            }

            return res.status(HttpStatus.OK).json({
                message: 'Note has been successfully updated',
                note
            });
        }
        catch(err) {
            return res.status(HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Note not updated',
                status: 400
            });
        }
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string){
        if(!id){
            throw new NotFoundException('Note ID does not exist');
        }

        //return this.doctorsService.deleteDoctor(id);
        const Note = await this.notesService.deleteNote(id);

        if(!Note){
            throw new NotFoundException('Note does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Note has been deleted',
            Note
        });    
    }
}