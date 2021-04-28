import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    fName: String;

    @Prop()
    lName: String;

    @Prop()
    title: String;

    @Prop()
    pagingNum: Number;

    @Prop()
    patientContactNum: Number;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);