import mongoose from "mongoose";

export interface IToken {
    token: string,
    user: mongoose.Types.ObjectId, 
    type: string,
    expires: Date,

}
