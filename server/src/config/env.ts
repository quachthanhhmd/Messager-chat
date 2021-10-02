import * as dotenv from 'dotenv'
import Joi from "joi";
import path from "path";

dotenv.config({ path: path.join(__dirname, '../../.env') });


const envSchemas: Joi.ObjectPropertiesSchema = Joi.object().keys({
    MONGO_URL: Joi.string().required(),
    PORT: Joi.number().required(),
    TYPE: Joi.string().valid('production', 'development', 'test').required(),
}).unknown();


const { value: env, error } = envSchemas.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default {
    TYPE: env.TYPE,
    MONGOOSE: {
        URL: env.MONGO_URL,
        OPTIONS: {
            autoIndex: true,
            autoCreate: true,
        },
    },
    PORT: env.PORT,

}
