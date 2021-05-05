import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './schema/note.schema';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';

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

    async findOne(id: String): Promise<Note> {
        return this.noteModel.findById(id).exec();
    }

    async update(id: String, updateNoteDto: UpdateNoteDTO): Promise<Note> {
        const updatedNote = await this.noteModel.findByIdAndUpdate({ _id: id }, updateNoteDto);

        if(!updatedNote){
            throw new NotFoundException(`Note #${id} not found.`);
        }
        else{
            return updatedNote;
        } 
    }

    async deleteNote(id: string): Promise<any> {
        const deletedNote = await this.noteModel.findByIdAndRemove(id);

        return deletedNote;
    }
}