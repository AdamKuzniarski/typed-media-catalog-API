import CatalogService from "../types/interfaces/CatalogService";
import { EntityModel } from "../types/interfaces/EntityModels";

export abstract class AbstractRepository<T extends EntityModel>
  implements CatalogService<T>
{
  private store: T[] = [];
  protected serviceName: string;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }
  getAll(): T[] {
    return this.store;
  }
  getByID(id: number) {
    return this.store.find((element) => element.id === id);
  }
   abstract create(payload: Omit<T, "id">): T;

  protected addToStore(entity: T): void {
    this.store.push(entity);
  }
}
