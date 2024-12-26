import { Schema, Document } from "mongoose";

export const UserSchema = new Schema({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    passwd: { type: String, required: true },
    userGrade: { type: Number, required: true },
    major: { type: String},
    creditSum: { type: Number },
    majorTransfer: { type: Boolean },
});

export interface User extends Document {
    name: string;
    id: Number;
    passwd: string;
    userGrade: number;
    major: string;
    creditSum: Number;
    majorTransfer: Boolean;
}