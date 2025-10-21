import "dotenv/config";
import express from "express";
import cors from "cors";
import { Response, Request } from "express";




const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());




app.listen(PORT, () => {
  console.log(`server is Running at http://localhost:${PORT}`);
});