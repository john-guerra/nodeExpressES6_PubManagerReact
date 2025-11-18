import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { fileURLToPath } from "url";

import configurePassport from "./authConfig.js";

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

configurePassport(app);

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.use("/api", indexRouter);
app.use("/auth", authRouter);

export default app;
