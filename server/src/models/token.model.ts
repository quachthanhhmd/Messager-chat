import mongoose from "mongoose";

import { TokenStates } from "../constants/token.constant";

import { IToken } from "../interfaces/token.interface";

const tokenSchema: mongoose.Schema = new mongoose.Schema<IToken>(
    {
        token: {
            type: String,
            required: true,
            index: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
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


export default Token;