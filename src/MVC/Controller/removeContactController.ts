import { promptRemoveConfirmation } from "../../MVC/View/Cli/Confirmations/promptRemoveConfirmation";
import { IContactStorage } from "../../Interface/IContactStorage";
import { promptRemoveContact } from "../../MVC/View/Cli/Prompts/promptRemoveContact";

export class RemoveContactController {
  constructor(private storage: IContactStorage) {}

  async removeContact(): Promise<void> {
    try {
      const phone = await promptRemoveContact();
      const confirmed = await promptRemoveConfirmation(phone);
      if (phone === null) {
        console.log("Operation cancelled.");
        return;
      }
      await this.storage.removeContact(phone);
      console.log("Contact removed successfully!");
    } catch (error: any) {
      console.error("Error removing contact:", error.message);
    }
  }
}
