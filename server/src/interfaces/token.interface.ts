import mongoose from "mongoose";

export interface IToken extends mongoose.Document {
    token: string,
    user: mongoose.Schema.Types.ObjectId 
    type: string,
    expires: Date,

}
