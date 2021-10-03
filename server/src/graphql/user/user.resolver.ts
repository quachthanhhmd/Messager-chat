import { AuthenticationError, ForbiddenError } from 'apollo-server-express';

import { User } from "../../models";
import { ISignUp } from "../../interfaces/user.interface";

import userService from '../../services/user.service';


import catchAsync from '../../utils/catchAsync';
import UserError from "../../errors/user.error";

const userResolvers = {
    Query: {
        user: async (root, { id }) => {

            console.log(id);
            return await userService.findUserById(id);
        },
    },
    Mutation: {

        signup: async (parent, args: ISignUp) => {

            try {

                if (!args.username || !args.password) throw new AuthenticationError(UserError.signup.invalidUsernamePassword);

                const newUser = await userService.createUser(args);
                // const user = await User.create(newUser);

                return newUser;
            } catch (error: any) {
                throw new Error(error);
            }
        }
    }
}


export default userResolvers;