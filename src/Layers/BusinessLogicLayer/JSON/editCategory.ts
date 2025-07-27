import { editCategoryInJSON } from "../../../Layers/DataAccessLayer/JSON/editCategoryInJSON";

export async function editCategoryJSON(selected: string, newName: string): Promise<void> {
  await editCategoryInJSON(selected, newName);
}
