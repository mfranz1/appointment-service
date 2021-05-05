import { Document, Schema as MongooseSchema } from 'mongoose';
export declare type NurseDocument = Nurse & Document;
export declare class Nurse {
    _id: MongooseSchema.Types.ObjectId;
    email: String;
    password: String;
    title: String;
    pagingNum: Number;
    fName: String;
    lName: String;
}
export declare const NurseSchema: MongooseSchema<Document<Nurse, {}>, import("mongoose").Model<any, any>, undefined>;
