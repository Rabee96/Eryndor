import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelizeConfig = new Sequelize({
  dialect: (process.env.DB_DIALECT as Dialect) || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "fakePassword",
  database: process.env.DB_NAME || "EryndorRecordsTest",
  logging: false, // Enable SQL query logging for debugging
});

export const registerModels = (models: any[]): void => {
  sequelize.addModels(models);
};

export const sequelize = new Sequelize({
  ...sequelizeConfig,
  models: [], // Models will be registered dynamically
});
