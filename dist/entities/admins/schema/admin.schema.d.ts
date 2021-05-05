import { Document, Schema as MongooseSchema } from 'mongoose';
export declare type AdminDocument = Admin & Document;
export declare class Admin {
    _id: MongooseSchema.Types.ObjectId;
    name: String;
    email: String;
    password: String;
    adminPin: Number;
    fName: String;
    lName: String;
}
export declare const AdminSchema: MongooseSchema<Document<Admin, {}>, import("mongoose").Model<any, any>, undefined>;
