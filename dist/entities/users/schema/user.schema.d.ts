import { Document, Schema as MongooseSchema } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    userID: MongooseSchema.Types.ObjectId;
    systemID: MongooseSchema.Types.ObjectId;
    accessGroup: String;
    email: String;
    password: String;
}
export declare const UserSchema: MongooseSchema<Document<User, {}>, import("mongoose").Model<any, any>, undefined>;
