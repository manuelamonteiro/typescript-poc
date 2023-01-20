import express from "express";
import cors from "cors";
import humorRouter from "./routers/humor-router.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(humorRouter);

const port = 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));