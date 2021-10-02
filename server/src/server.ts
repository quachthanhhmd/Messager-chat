import mongoose from "mongoose";
import http from "http";

import env from "./config/env";
import app from "./app";

import logger from "./config/logger";

const server = http.createServer(app);

mongoose.connect(env.MONGOOSE.URL, env.MONGOOSE.OPTIONS).then(() => {
    logger.info('Connected to MongoDB');
    //socket(server);
    server.listen(env.PORT, () => {
        logger.info(`Listening to port ${env.PORT}`);
    });
});

