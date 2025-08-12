import mongoose from "mongoose";
import { serverConfig } from ".";
import { logger } from "./logger.config";

export async function connectDB() {
  try {
    await mongoose.connect(serverConfig.MONGO_URI);
    logger.info('MongoDB connection has been established successfully!');
  } catch (error) {
    logger.error(`Error connecting to MongoDB: ${error}`);
    throw error;
  }
}