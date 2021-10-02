import { gql } from 'apollo-server-express';
import userTypes from "./user/user.type";



const combinedTypes = [userTypes];

export default combinedTypes;