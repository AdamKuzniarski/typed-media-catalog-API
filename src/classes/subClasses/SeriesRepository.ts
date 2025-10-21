import { SeriesModel } from "../../types/interfaces/EntityModels";
import { AbstractRepository } from "../AbstractRepository";

export default class SeriesRepository extends AbstractRepository<SeriesModel> {
  create(payload: Omit<SeriesModel, "id">): SeriesModel {
    const allSeries = this.getAll();
    if (payload.totalSeasons >= 1) {
      const newItem: SeriesModel = {
        ...payload,
        id: allSeries.length ? allSeries[allSeries.length - 1].id + 1 : 1,
      };
      this.addToStorage(newItem);
      return newItem;
    } else {
      throw new Error("The Number of seasons has to be >= 1");
    }
  }
}
