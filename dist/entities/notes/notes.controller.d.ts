import { NotesServices } from './notes.service';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './schema/note.schema';
import { UpdateNoteDTO } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesServices);
    create(res: any, createNoteDto: CreateNoteDTO): Promise<any>;
    findAll(): Promise<Note[]>;
    findOne(res: any, id: string): Promise<any>;
    update(res: any, id: string, updateNoteDto: UpdateNoteDTO): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
