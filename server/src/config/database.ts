import mongoose from "mongoose";
import env from "./env";
import logger from "./logger";




export const getConnection = async (): Promise<mongoose.Connection> => {

  return await mongoose.createConnection(env.MONGOOSE.URL, {
    autoCreate: true,
    autoIndex: true,
    bufferCommands: false,
  });
};