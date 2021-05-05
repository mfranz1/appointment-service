import { Document, Schema as MongooseSchema } from 'mongoose';
export declare type DoctorDocument = Doctor & Document;
export declare class Doctor {
    _id: MongooseSchema.Types.ObjectId;
    email: String;
    password: String;
    fName: String;
    lName: String;
    title: String;
    pagingNum: Number;
    patientContactNum: Number;
}
export declare const DoctorSchema: MongooseSchema<Document<Doctor, {}>, import("mongoose").Model<any, any>, undefined>;
