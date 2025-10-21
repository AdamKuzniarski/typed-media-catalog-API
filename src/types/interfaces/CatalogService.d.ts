import {EntityModel} from "./EntityModels";

export default interface CatalogService<T extends EntityModel> {
  getAll(): T[];
  getByID(id: number): T | undefined;
  create(payload: Omit<T, "id">): T;
}
