import mongoose from "mongoose";

import Plugin from "./plugins";


interface IConversation {

    conversationName: string,
    peopleList: Array<mongoose.Types.ObjectId>,
}

const conversationSchema = new mongoose.Schema<IConversation>(
    {
        conversationName: {
            type: String,
            default: "Conversation with Friend",
        },
        peopleList: {
            type: Array,
           
        },

    },
    {
        timestamps: true,
    }
)

// add plugin that converts mongoose to json
conversationSchema.plugin(Plugin.paginate);

const Conversation = mongoose.model<IConversation>('Conversation', conversationSchema);


export default Conversation;