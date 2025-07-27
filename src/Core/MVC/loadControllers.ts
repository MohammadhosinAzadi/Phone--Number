import { currentStorage, StorageType } from "../../Config/storageConfig";
import { JSONStorage } from "../../MVC/StorageEngines/JSONStorage";
import { SQLiteStorage } from "../../MVC/StorageEngines/SQLiteStorage";
import { IContactStorage } from "../../Interface/IContactStorage";
import { AddContactController } from "../../MVC/Controller/addContactController";
import { RemoveContactController } from "../../MVC/Controller/removeContactController";
import { ViewContactController } from "../../MVC/Controller/viewContactController";
import { EditContactController } from "../../MVC/Controller/editContactController";
import { EditCategoryController } from "../../MVC/Controller/editCategoryController";

export interface Controllers {
  addContactController: AddContactController;
  removeContactController: RemoveContactController;
  viewContactController: ViewContactController;
  editContactController: EditContactController;
  editCategoryController: EditCategoryController;
}

export async function loadControllers(): Promise<Controllers> {
  let storage: IContactStorage;

  switch (currentStorage) {
    case StorageType.JSON:
      storage = new JSONStorage();
      break;
    case StorageType.SQLITE:
      storage = new SQLiteStorage();
      break;
    default:
      throw new Error("Unsupported storage type");
  }
  return {
    addContactController: new AddContactController(storage),
    removeContactController: new RemoveContactController(storage),
    viewContactController: new ViewContactController(storage),
    editContactController: new EditContactController(storage),
    editCategoryController: new EditCategoryController(storage),
  };
}
