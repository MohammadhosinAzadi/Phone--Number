import { currentStorage, StorageType } from "../../Config/storageConfig";
import { JSONStorage } from "../../Layers/StorageEngines/JSONStorage";
import { SQLiteStorage } from "../../Layers/StorageEngines/SQLiteStorage";
import { IContactStorage } from "../../Interface/IContactStorage";
import { AddContactController } from "../../Layers/ApplicationLayer/addContactController";
import { RemoveContactController } from "../../Layers/ApplicationLayer/removeContactController";
import { ViewContactController } from "../../Layers/ApplicationLayer/viewContactController";
import { EditContactController } from "../../Layers/ApplicationLayer/editContactController";
import { EditCategoryController } from "../../Layers/ApplicationLayer/editCategoryController";

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