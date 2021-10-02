import { gql } from 'apollo-server-express';


const userType = gql`
    type User {
        id: String
        username: String!
        displayName: String
        avatar: String
        gender: String 
        conservationList: [Conservation]
    }
`;


export default userType;