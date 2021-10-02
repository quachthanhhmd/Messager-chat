import mongoose from "mongoose";

export interface IConversation extends mongoose.Document {

    conversationName: string,
    peopleList: Array<mongoose.Types.ObjectId>,
}