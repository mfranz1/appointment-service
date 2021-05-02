import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { kStringMaxLength } from 'node:buffer';

export type PatientDocument = Patient & Document;


@Schema()
export class Patient {
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    fName: String;

    @Prop()
    middleInitial: String;

    @Prop()
    lName: String;

    @Prop()
    dob: String;

    @Prop(raw({
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: Number }
    }))
    address: Record<string, any>;

    @Prop()
    primaryPhone: Number;

    @Prop()
    secondaryPhone: Number;

    @Prop()
    gender: String;

    @Prop()
    ssn: Number;

    @Prop(raw({
        fName: { type: String },
        lName: { type: String },
        phone: { type: Number }
    }))
    emergencyContact: Record<string, any>;

    @Prop(raw({
        policyNumber: { type: Number },
        groupNumber: { type: Number },
        policyHolder: { 
            type: {
                fName: String,
                lName: String,
                ssn: Number,
                dob: String
            }
        }
    }))
    insurance: Record<string, any>;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);