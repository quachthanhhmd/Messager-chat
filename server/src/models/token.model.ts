import mongoose from "mongoose";

import { TokenStates } from "../constants/token.constant";


interface IToken {
    token: string,
    user: mongoose.Types.ObjectId, 
    type: string,
    expires: Date,

}

const tokenSchema: mongoose.Schema = new mongoose.Schema<IToken>(
    {
        token: {
            type: String,
            required: true,
            index: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        type: {
            type: String,
            enum: [TokenStates.REFRESH, TokenStates.RESET_PASSWORD, TokenStates.VERIFY],
            required: true,
        },
        expires: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);



/**
 * @typedef Token
 */
const Token = mongoose.model<IToken>('Token', tokenSchema);


export default  Token;