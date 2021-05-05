import * as mongoose from 'mongoose';
import { Patient } from '../../patients/schema/patient.schema';
import { Note } from '../../notes/schema/note.schema';
import { Appointment } from '../../appointments/schema/appointment.schema';
export declare type HealthRecordDocument = HealthRecord & mongoose.Document;
export declare class HealthRecord {
    patientID: Patient["_id"];
    primaryDopctor: String;
    appointments: Appointment["_id"][];
    patientHealthRecord: Record<string, any>;
    notes: Note["_id"][];
}
export declare const HealthRecordSchema: mongoose.Schema<mongoose.Document<HealthRecord, {}>, mongoose.Model<any, any>, undefined>;
