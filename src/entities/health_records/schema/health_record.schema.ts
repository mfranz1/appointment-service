import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { Document, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import { Patient } from '../../patients/schema/patient.schema';
import { Note } from '../../notes/schema/note.schema';
import { Appointment } from '../../appointments/schema/appointment.schema';

export type HealthRecordDocument = HealthRecord & mongoose.Document;

@Schema()
export class HealthRecord {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
    patientID: Patient["_id"];

    @Prop()
    primaryDopctor: String;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }] })
    appointments: Appointment["_id"][];

    @Prop(raw({
        vitals: {
            type: {
                height: String,
                weight: Number,
                bloodPressure: String,
                temp: Number
            }
        }
    }))
    patientHealthRecord: Record<string, any>;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] })
    notes: Note["_id"][];
    
}

export const HealthRecordSchema = SchemaFactory.createForClass(HealthRecord);