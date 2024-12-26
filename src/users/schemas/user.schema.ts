import { Schema, Document } from "mongoose";

export const UserSchema = new Schema({
    id: { type: String, required: true },
    passwd: { type: String, required: true },
    name: { type: String, required: true },
    userGrade: { type: Number, required: true },
    creditSum: { type: Number },
    major: { type: String },
});

export interface User extends Document {
    id: string;
    passwd: string;
    name: string;
    userGrade: number;
}