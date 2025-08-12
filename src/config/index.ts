import dotenv from 'dotenv';

type ServerConfigType = {
    PORT: number;
    REDIS_URL: string;
    MONGO_URI: string;
    REDIS_COUNTER_KEY: string;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

export const serverConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 3000,
    REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/short_my_url',
    REDIS_COUNTER_KEY: process.env.REDIS_COUNTER_KEY || 'url_shortener_counter'
};