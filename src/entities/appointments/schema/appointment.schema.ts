import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Patient } from '../../patients/schema/patient.schema';
import { Doctor } from '../../doctors/schema/doctor.schema';
import { Note } from '../../notes/schema/note.schema';

export type AppointmentDocument = Appointment & mongoose.Document;

@Schema()
export class Appointment {
    _id: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
    patientID: Patient["_id"];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
    doctorID: Doctor["_id"];

    @Prop()
    date: Date;

    @Prop()
    time: String;

    @Prop()
    type: String;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] })
    notes: Note["_id"][];

    @Prop()
    appointmentConfirmed: Boolean;

    @Prop()
    archive: String;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);