import "dotenv/config";
import express from "express";
import cors from "cors";
import publicRoutes from "./routes/router"
import nunjucks from "nunjucks"
const app = express();
const PORT = process.env.PORT || 3000;

const nunEnv = nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app
.use(cors())
.use(express.static("public"))
.use(express.urlencoded({ extended: true })) // für form-urlencoded (HTML forms)
.use(express.json()) // für JSON body
.use(publicRoutes);



app.listen(PORT, () => {
  console.log(`server is Running at http://localhost:${PORT}`);
});

