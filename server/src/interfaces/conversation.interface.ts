import mongoose from "mongoose";

export interface IConversation {

    conversationName: string,
    peopleList: Array<mongoose.Types.ObjectId>,
}