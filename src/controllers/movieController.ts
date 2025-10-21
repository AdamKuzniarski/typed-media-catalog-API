import type { Request, Response } from "express";
import MovieRepository from "../classes/subClasses/MovieRepository";

const movieRepository = new MovieRepository("Our little repository");
export function getMovieController(req: Request, res: Response) {
const list = movieRepository.getAll();
  res.render("../views/pages/movies.html", {
    meta: {
      title: "My Movies",
    },
    headerData: {
      title: "My Movies",
      subTitle: "These are my movies!",
    },
    list
  });
}

export function postMovieController(req: Request, res: Response) {
try{
  const newMovie = req.body
  console.log(newMovie);
  movieRepository.create(newMovie);
  console.log(newMovie);
}
catch(error){console.error(error)}
  
  res.render("../views/pages/movies.html", {
    meta: {
      title: "My Movies",
    },
    headerData: {
      title: "My Movies",
      subTitle: "These are my movies!",
    },
  });
}
