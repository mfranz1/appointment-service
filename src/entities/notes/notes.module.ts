import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schema/note.schema';
import { NotesServices } from './notes.service';
import { NotesController } from './notes.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])],
    controllers: [NotesController],
    providers: [NotesServices],
})
export class NotesModule {}