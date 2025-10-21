import express from "express";
import { getMovieController, postMovieController } from "../controllers/movieController";
import { seriesController } from "../controllers/seriesController";

const router = express.Router();

router
.get("/movies", getMovieController)
.get("/series", seriesController)
.post("/movies", postMovieController)

export default router;