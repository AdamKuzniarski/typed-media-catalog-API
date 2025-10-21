import CatalogService from "../types/interfaces/CatalogService";
import { EntityModel } from "../types/interfaces/EntityModels";

export abstract class AbstractRepository<T extends EntityModel>
  implements CatalogService<T>
{
  private storage: T[] = [];
  protected serviceName: string;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }
  getAll(): T[] {
    return this.storage;
  }
  getByID(id: number) {
    return this.storage.find((element) => element.id === id);
  }
   abstract create(payload: Omit<T, "id">): T;

  protected addToStorage(entity: T): void {
    this.storage.push(entity);
  }
}


//für MovieRepository, SerienRepository und weitere z.B. UserRepository