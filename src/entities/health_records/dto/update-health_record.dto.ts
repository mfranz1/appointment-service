import * as mongoose from 'mongoose';

export class UpdateHealthRecordDTO {
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