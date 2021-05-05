import * as mongoose from 'mongoose';
export declare class CreateNoteDTO {
    readonly noteAuthor: mongoose.Schema.Types.ObjectId;
    readonly note: String;
    readonly timeStamp: {
        date: Date;
        time: String;
    };
}
