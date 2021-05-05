import { Schema } from "mongoose";
export declare class CreateUserDTO {
    readonly userID: Schema.Types.ObjectId;
    readonly systemID: Schema.Types.ObjectId;
    readonly accessGroup: String;
    readonly email: String;
    readonly password: String;
}
