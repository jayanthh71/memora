import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

export async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    cachedClient = client;
    return cachedClient;
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw new Error("Failed to connect to the database");
  }
}
