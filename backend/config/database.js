import { MongoClient } from "mongodb";

let client;
let database;

export async function connectDB(uri, databaseName) {
  if (!uri) {
    return null;
  }

  client = new MongoClient(uri);
  await client.connect();
  database = databaseName ? client.db(databaseName) : client.db();

  return database;
}

export function getDB() {
  if (!database) {
    throw new Error("Database is not connected");
  }

  return database;
}

export async function closeDB() {
  if (client) {
    await client.close();
    client = undefined;
    database = undefined;
  }
}
