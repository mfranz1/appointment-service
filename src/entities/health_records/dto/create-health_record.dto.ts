import * as mongoose from 'mongoose';
import { Note } from '../../notes/schema/note.schema';

export class CreateHealthRecordDTO {
    readonly patientID: mongoose.Schema.Types.ObjectId;
    readonly primaryDoctor: String;
    readonly appointments: [mongoose.Schema.Types.ObjectId];
    readonly patientHealthRecord: {
        vitals: {
            height: String,
            weight: Number,
            bloodPressure: String,
            temp: Number
        }
    };
    readonly notes: [mongoose.Schema.Types.ObjectId];
}