import mongoose from "mongoose";


export interface IUser  extends mongoose.Document {
    username: string;
    password: string;
    avatar?: string;
    displayName: string;
    gender: string;
    conversationList: Array<mongoose.Schema.Types.ObjectId>;
    lastLogin: Date;
};



export interface ISignUp {
    username: string;
    password: string;
    displayName: string;
    gender: string;
};