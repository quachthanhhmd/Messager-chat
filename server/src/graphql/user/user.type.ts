import { gql } from 'apollo-server-express';


const userType = gql`
    type User {
        _id: String
        username: String!
        displayName: String!
        avatar: String
        gender: String!
      
    }
    
    type Query {
        user(id: ID!): User
    }

    type Mutation {
        signup(username: String!, password: String!, displayName: String!, gender: String!): User
      }
`;


export default userType;