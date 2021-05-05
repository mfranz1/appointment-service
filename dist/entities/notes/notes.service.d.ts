import { Model } from 'mongoose';
import { Note, NoteDocument } from './schema/note.schema';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
export declare class NotesServices {
    private noteModel;
    constructor(noteModel: Model<NoteDocument>);
    create(createNoteDto: CreateNoteDTO): Promise<Note>;
    findAll(): Promise<Note[]>;
    findOne(id: String): Promise<Note>;
    update(id: String, updateNoteDto: UpdateNoteDTO): Promise<Note>;
    deleteNote(id: string): Promise<any>;
}
