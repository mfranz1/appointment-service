import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Patient } from '../../patients/schema/patient.schema';
import { Doctor } from '../../doctors/schema/doctor.schema';
import { Note } from '../../notes/schema/note.schema';

export type AppointmentDocument = Appointment & mongoose.Document;

@Schema()
export class Appointment {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
    patientID: Patient;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
    doctorID: Doctor;

    @Prop()
    date: Date;

    @Prop()
    time: String;

    @Prop()
    type: String;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] })
    notes: Note[];

    @Prop()
    appointmentConfirmed: Boolean;

    @Prop()
    archive: String;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);