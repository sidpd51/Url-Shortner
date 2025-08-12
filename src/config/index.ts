import dotenv from 'dotenv';

type ServerConfigType = {
    PORT: number;
    REDIS_URL: string;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

export const serverConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 3000,
    REDIS_URL: 'redis://localhost:6379'
};