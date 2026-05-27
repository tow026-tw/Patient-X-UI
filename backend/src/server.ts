import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (_, res) => {
    res.json({ message: "Hello from backend 👋" });
});

app.listen(5000, () => {
    console.log("Server started");
});