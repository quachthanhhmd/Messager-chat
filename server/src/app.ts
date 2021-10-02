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
        this.app.use(helmet.noCache());
        this.app.use(helmet.hsts({
            maxAge: 31536000,
            includeSubDomains: true
        }));
        
        // Enable cors for all routes and origins
        this.app.use(cors());

    }
    private Router() {

        this.app.get("/", async (req: express.Request, res: express.Response) => {

            const user = await  User.create({
                username: "Thanh",
                password: "Thanh12312!",
                displayName: "hai thanh",
                gender: "male"
            });

            res.send(user);
        })
    }
}

export default new App().app;