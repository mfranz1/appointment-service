import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type NurseDocument = Nurse & Document;

@Schema()
export class Nurse {
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    title: String;

    @Prop()
    pagingNum: Number;

    @Prop()
    fName: String;

    @Prop()
    lName: String;
}

export const NurseSchema = SchemaFactory.createForClass(Nurse);