import mongoose from "mongoose";

import Plugin from "./plugins";
import {IConversation} from "../interfaces/conversation.interface";


const conversationSchema = new mongoose.Schema<IConversation>(
    {
        conversationName: {
            type: String,
            default: "Conversation with Friend",
        },
        peopleList: [
            {
                type: mongoose.Types.ObjectId
                ref: "User",
            }
        ],

    },
    {
        timestamps: true,
    }
)

// add plugin that converts mongoose to json
conversationSchema.plugin(Plugin.paginate);

const Conversation = mongoose.model<IConversation>('Conversation', conversationSchema);


export default Conversation;