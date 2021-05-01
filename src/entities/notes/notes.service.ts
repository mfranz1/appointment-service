import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './schema/note.schema';
import { CreateNoteDTO } from './dto/create-note.dto';

@Injectable()
export class NotesServices {
    constructor(
        @InjectModel(Note.name) private noteModel: Model<NoteDocument>
    ) {}

    async create(createNoteDto: CreateNoteDTO): Promise<Note> {
        const createdNote = new this.noteModel(createNoteDto);
        return createdNote.save();
    }

    async findAll(): Promise<Note[]> {
        return this.noteModel.find().exec();
    }
}