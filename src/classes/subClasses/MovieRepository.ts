import { MovieModel } from "../../types/interfaces/EntityModels";
import { AbstractRepository } from "../AbstractRepository";

export default class MovieRepository extends AbstractRepository <MovieModel>  {
    

  create(payload: Omit<MovieModel, "id">): MovieModel{
    const allMovies = this.getAll()
    if (payload.runtimeMinutes >= 0){
    const newItem: MovieModel = {
      ...payload,
      id: allMovies.length ? allMovies[allMovies.length - 1].id + 1 : 1,
    } as MovieModel;
    this.addToStorage(newItem);
    return newItem;}
    throw new Error("The run time of the movie has to be positive");
}
}