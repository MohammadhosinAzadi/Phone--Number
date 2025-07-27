import { IContactStorage } from "../../Interface/IContactStorage";
import { promptEditCategories } from "../../Layers/PresentationLayer/Cli/Prompts/promptEditCategories";

export class EditCategoryController {
  constructor(private storage: IContactStorage) {}

  async editCategory(): Promise<void> {
    try {
      const categories = await this.storage.getCategories();
      if (!categories || categories.length === 0) {
        console.log("No categories found.");
        return;
      }
      const data = await promptEditCategories(categories);
      if (data === null) {
        console.log("Operation cancelled.");
        return;
      }
      const { selectedCategory, newCategoryName } = data;
      await this.storage.editCategory(selectedCategory, newCategoryName);
    } catch (error: any) {
      console.error("Error editing category:", error.message || error);
    }
  }
}