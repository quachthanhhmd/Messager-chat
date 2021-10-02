
export interface IMesssagList {

    status: string,
    senderId: mongoose.Schema.Types.ObjectId,
    content: string,
    link: string, 
    time: Date,
    isSpoil: Boolean,
}

export interface IMessage {

    conversationId : mongoose.Schema.Types.ObjectId,
    messageList: Array<IMesssagList>,
}