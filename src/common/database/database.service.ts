import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { sequelize } from "./sequelize.config";

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully!");
      await sequelize.sync();
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }

  async onModuleDestroy() {
    await sequelize.close();
  }
}
