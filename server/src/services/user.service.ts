import mongoose from "mongoose";
import { AuthenticationError, ForbiddenError, ApolloError } from 'apollo-server-express';


import  User  from "../models/user.model";

import { ISignUp, IUser } from "../interfaces/user.interface";

import error from "../errors/user.error";
import server from "../errors/server.error";


/**
 * FIND USER BY USERNAME
 * @param {string} username 
 * @returns {Promise<User>} 
 */
 const findUserbyUsername = async (username: string): Promise<IUser | null> => {

    return await User.findOne({
        username: username,
    })
}


/**
 * CREATE USER WHEN REGISTERING
 * @param user 
 * @returns {Promise<createUserAttributes>}
 */
 const createUser = async (user: ISignUp): Promise<ISignUp | null> => {

    //Check user exist in DB
    const checkUserExist = await findUserbyUsername(user.username);

    if (checkUserExist) throw new AuthenticationError(error.signup.invalidUsername);

    //Create User
    const newUser = await User.create(user);


    if (!newUser) {
        throw new ApolloError(server.Internal.message, server.Internal.code);
    }

    return newUser;
}

/**
 * 
 * @param {mongoose.Schema.Types.ObjectId} id 
 * @returns 
 */
const findUserById = async (id: string) => {

    return await User.findById(id);
}


export default {
    createUser,
    findUserById
}