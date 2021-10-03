import mongoose from "mongoose";
import http from "http";

import env from "./config/env";
import app from "./app";
import apolloServer from "./apollo";

import logger from "./config/logger";

(async () => {
    const httpServer = http.createServer(app);

    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/'
    });


    // httpServer.listen(env.PORT, () => {
    //     console.log(`🚀 Server ready at http://localhost:${env.PORT}${apolloServer.graphqlPath}`);
    // })

    mongoose.connect(env.MONGOOSE.URL, env.MONGOOSE.OPTIONS).then(() => {
        logger.info('Connected to MongoDB');

        httpServer.listen(env.PORT, () => {
            logger.info(`🚀 Server ready at http://localhost:${env.PORT}${apolloServer.graphqlPath}`);
        });
    });

    //apolloServer.installSubscriptionHandlers(httpServer);


})();
