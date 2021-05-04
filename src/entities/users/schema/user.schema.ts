import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop()
    userID: MongooseSchema.Types.ObjectId;

    @Prop()
    systemID: MongooseSchema.Types.ObjectId;

    @Prop()
    accessGroup: String;

    @Prop()
    email: String;

    @Prop()
    password: String;
}

export const UserSchema = SchemaFactory.createForClass(User);