import * as mongoose from 'mongoose';
import { Nurse } from '../../nurses/schema/nurse.schema';
export declare type NoteDocument = Note & mongoose.Document;
export declare class Note {
    _id: mongoose.Schema.Types.ObjectId;
    noteAuthor: Nurse["_id"];
    note: String;
    timeStamp: Record<string, any>;
}
export declare const NoteSchema: mongoose.Schema<mongoose.Document<Note, {}>, mongoose.Model<any, any>, undefined>;
