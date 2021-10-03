import { Request } from "express";

import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/combined.type';
import resolvers from './graphql/combined.resolver';

import { getConnection } from "./config/database";
import env from "./config/env";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        // remove the internal sequelize error message
        // leave only the important validation error
        const message = error.message
            .replace('SequelizeValidationError: ', '')
            .replace('Validation error: ', '');

        return {
            // ...error, // uncomment this if you want to receive internal errors
            message,
        };
    },
    // graphqlPath: "/",
    // context: async () => {
    //    // { req: Request }
    //     const dbConn = await getConnection();

    //     return { dbConn };

    //     // return {
    //     //     //authScope: await getUser(req.headers.authorization),
    //     //     models,
    //     // };
    // },

    // subscriptions: {
    //     onConnect: () => console.log('Connected to websocket....../n'),
    // },
    
});


export default server;