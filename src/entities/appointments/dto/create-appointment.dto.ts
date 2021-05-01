import * as mongoose from 'mongoose';

export class CreateAppointmentDTO {
    readonly patientID: mongoose.Schema.Types.ObjectId;
    readonly doctorID: mongoose.Schema.Types.ObjectId;
    readonly date: Date;
    readonly time: String;
    readonly type: String;
    readonly notes: [mongoose.Schema.Types.ObjectId];
    readonly appointmentConfirmed: Boolean;
    readonly archive: String;
}