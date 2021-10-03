import express from "express";
import { User } from "./models/index";


import cors from "cors";
import helmet from "helmet";


class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.Router();
    }

    private config(): void {
        // parse json request body
        this.app.use(express.json());

        // parse urlencoded request body
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(helmet());
        
        // Enable cors for all routes and origins
        this.app.use(cors());

    }
    private Router() {

        
    }
}

export default new App().app;