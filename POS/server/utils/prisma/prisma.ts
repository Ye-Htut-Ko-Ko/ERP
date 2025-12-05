import { PrismaClient as MongoClient } from '../../database/generated/prisma/mongo/client';
import { PrismaClient as MysqlClient } from '../../database/generated/prisma/mysql/client';
import { withAccelerate } from "@prisma/extension-accelerate";
import * as process from "node:process";
// GLOBAL (for development)
const globalForPrisma = globalThis as unknown as {
  mongo?: MongoClient;
  mysql?: MysqlClient;
};


// MONGO
export const mongo =
  globalForPrisma.mongo ?? new MongoClient( {
      log: process.env.NODE_ENV === "development" ? ["query", "info"] : [],
});

// MYSQL
export const mysql =
  globalForPrisma.mysql ?? new MysqlClient({
      log: process.env.NODE_ENV === "development" ? ["query", "info"] : [],
  });

// Prevent hot-reload duplicates
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.mongo = mongo;
  globalForPrisma.mysql = mysql;
}

