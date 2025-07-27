import { promptRemoveContact } from "../../Layers/PresentationLayer/Cli/Prompts/promptRemoveContact";
import { promptRemoveConfirmation } from "../../Layers/PresentationLayer/Cli/Confirmations/promptRemoveConfirmation";
import { IContactStorage } from "../../Interface/IContactStorage";

export class RemoveContactController {
  constructor(private storage: IContactStorage) {}

  async removeContact(): Promise<void> {
    try {
      const phone = await promptRemoveContact();
      const confirmed = await promptRemoveConfirmation(phone);
      if (!confirmed) {
        console.log("Operation cancelled.");
        return;
      }
      await this.storage.removeContact(phone);
      console.log("Contact removed successfully!");
    } catch (error: any) {
      console.error("Error removing contact:", error.message || error);
    }
  }
}
