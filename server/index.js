import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoutes from "./routes/todos.js";
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.json({ urlencoded: true }));
app.use(cors());
app.use("/todos", todosRoutes);
const mongodb =
  "mongodb+srv://zodak:password12345@test.m50feqa.mongodb.net/todos-db?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Welcome to server");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));
