import dns from "node:dns";
import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index.js";
import { closeDB, connectDB } from "./config/database.js";

process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8", "8.8.4.4"]);

const port = process.env.PORT || 5000;
const app = express();
const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());
app.use(routes);

async function startServer() {
  try {
    await connectDB(process.env.MONGODB_URI, process.env.DB_NAME);
    app.listen(port, () => {
      console.log(`Life Flow API is running on port ${port}.`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
}

async function shutdown() {
  await closeDB();
  process.exit(0);
}

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);

startServer();
