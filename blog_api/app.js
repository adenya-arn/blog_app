import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";

import path from "node:path";
import { fileURLToPath } from "node:url";
import postRouter from "./routes/postRouter.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Blog API running",
  });
});

app.use("/auth", authRouter);
app.use("/posts", postRouter);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
