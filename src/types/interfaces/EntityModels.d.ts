export  interface EntityModel {
  id: number;
  title: string;
}


 export interface MovieModel extends EntityModel {
  runtimeMinutes: number;
 }

 export interface SeriesModel extends EntityModel{
  totalSeasons: number;
 }