import mongoose from "mongoose";

import { MessageType } from "../constants/message.constant";

import {IMesssagList, IMessage} from "../interfaces/messsage.interface";

const enumMessage = {

    values: Object.keys(MessageType).map(type => type),
    messages: `Type of message must be in ${Object.keys(MessageType).map(type => type).join(", ")}`,
}





const MessageSchema: mongoose.Schema = new mongoose.Schema<IMessage>(
    {
        conversationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Conversation'
        },
        messageList: [
            {
                status: {
                    type: String,
                    enum: enumMessage,
                    default: "waiting",
                },
                senderId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                content: {
                    type: String,
                    maxlength: 500,
                },
                link: {
                    type: String,
                    default: "",
                },
                time: {
                    type: Date,
                    default: new Date(),
                },
                isSpoil: {
                    type: Boolean,
                    default: false,
                }
            }
        ]
    },
    {
        timestamps: true,
    }
)

/**
 * @typedef Message
 */
const Message = mongoose.model<IMessage>('Message', MessageSchema);

export default Message;