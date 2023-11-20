import express from "express";
import bodyParser from "body-parser";
import todRoutes from "./routes/totods";

const app = express();
app.use(bodyParser.json());

app.use(todRoutes);
app.listen(3000);
