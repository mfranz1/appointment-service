import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
    _id: MongooseSchema.Types.ObjectId;

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