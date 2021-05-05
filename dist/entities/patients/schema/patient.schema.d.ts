import { Document, Schema as MongooseSchema } from 'mongoose';
export declare type PatientDocument = Patient & Document;
export declare class Patient {
    _id: MongooseSchema.Types.ObjectId;
    email: String;
    password: String;
    fName: String;
    middleInitial: String;
    lName: String;
    dob: String;
    address: Record<string, any>;
    primaryPhone: Number;
    secondaryPhone: Number;
    gender: String;
    ssn: Number;
    emergencyContact: Record<string, any>;
    insurance: Record<string, any>;
}
export declare const PatientSchema: MongooseSchema<Document<Patient, {}>, import("mongoose").Model<any, any>, undefined>;
