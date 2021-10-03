import mongoose from "mongoose";

export interface IMesssagList  extends mongoose.Document {

    status: string,
    senderId: mongoose.Schema.Types.ObjectId,
    content: string,
    link: string, 
    time: Date,
    isSpoil: Boolean,
}

export interface IMessage  extends mongoose.Document{

    conversationId : mongoose.Schema.Types.ObjectId,
    messageList: Array<IMesssagList>,
}