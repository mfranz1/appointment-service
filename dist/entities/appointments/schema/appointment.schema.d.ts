import * as mongoose from 'mongoose';
import { Patient } from '../../patients/schema/patient.schema';
import { Doctor } from '../../doctors/schema/doctor.schema';
import { Note } from '../../notes/schema/note.schema';
export declare type AppointmentDocument = Appointment & mongoose.Document;
export declare class Appointment {
    _id: mongoose.Schema.Types.ObjectId;
    patientID: Patient["_id"];
    doctorID: Doctor["_id"];
    date: Date;
    time: String;
    type: String;
    notes: Note["_id"][];
    appointmentConfirmed: Boolean;
    archive: String;
}
export declare const AppointmentSchema: mongoose.Schema<mongoose.Document<Appointment, {}>, mongoose.Model<any, any>, undefined>;
