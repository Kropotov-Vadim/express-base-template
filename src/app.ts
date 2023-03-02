import express from "express";
import { homeRouter } from "./routers/home.router";

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`App listening on: http://localhost:${port}`);
})
