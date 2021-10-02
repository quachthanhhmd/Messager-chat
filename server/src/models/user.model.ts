import mongoose from "mongoose";

import Plugin from "./plugins";

import { initPasswordHash, comparePasswordHash } from "../config/bcrypt";
import {IUser} from "../interfaces/user.interface";

interface IEnumValidate {
    values: Array<string>,
    messages: string,
}

const EnumGender: IEnumValidate = {
    values: ["male", "female", "other"],
    messages: `State of gender must be in ${["male", "female", "other"].join(", ")}`
}



const UserSchema: mongoose.Schema = new mongoose.Schema<User>({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error('Password must contain at least one letter and one number');
            }
        },
    },
    avatar: {
        type: String,
        required: false,
    },
    displayName: {
        type: String,
        required: true,
        maxlength: 40,
        validate(value: string) {
            if (value.length >= 40) {
                throw new Error('Name must be less than 40 characters');
            }
        }
    },
    gender: {
        type: String,
        required: true,
        enum: EnumGender.values,
    },

},
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
UserSchema.plugin(Plugin.paginate);


/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
UserSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return comparePasswordHash(password, user.password);
};

UserSchema.pre('save', async function (next) {
    const user: any = this;
    if (user.isModified('password')) {
        user.password = initPasswordHash(user.password);
    }
    next();
});

/**
 * @typedef User
 */
const User = mongoose.model<User>('User', UserSchema);


export default User;