import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    adminPin: Number;

    @Prop()
    fName: String;

    @Prop()
    lName: String;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);