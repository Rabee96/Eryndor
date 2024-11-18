import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "fakePassword",
  database: process.env.DB_NAME || "EryndorRecordsTest",
  //models: [UserModel], // Register your Sequelize models here
  logging: false, // Enable SQL query logging for debugging
});
