import { createClient } from "redis";
import { serverConfig } from ".";
import { logger } from "./logger.config";

export const redisClient = createClient({
  url: serverConfig.REDIS_URL
});

redisClient.on('error', (err) => {
  logger.error(`Redis error: ${err}`);
});

redisClient.on('connect', () => {
  logger.info("Redis connected");
});

export async function initRedis() {
  try {
    await redisClient.connect();
  } catch (error) {
    logger.error(`Redis connection error: ${error}`);
    throw error;
  }
}

export async function closeRedis() {
  await redisClient.quit();
}