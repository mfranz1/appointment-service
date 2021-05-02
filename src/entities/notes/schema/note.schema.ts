import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Nurse } from '../../nurses/schema/nurse.schema';

export type NoteDocument = Note & mongoose.Document;

@Schema()
export class Note {
    _id: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse' })
    noteAuthor: Nurse["_id"];

    @Prop()
    note: String;

    @Prop(raw({
        date: { type: Date },
        time: { type: String }
    }))
    timeStamp: Record<string, any>;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

