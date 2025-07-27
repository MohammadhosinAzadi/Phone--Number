import { promptAddContact } from "../../Layers/PresentationLayer/Cli/Prompts/PromptAddContact/index";
import { promptAddConfirmation } from "../../Layers/PresentationLayer/Cli/Confirmations/promptAddConfirmation";
import { IContactStorage } from "../../Interface/IContactStorage";
import { Record } from "../../Typs/record";

export class AddContactController {
  constructor(private storage: IContactStorage) {}

  async addContact(): Promise<void> {
    try {
      const contact: Record = await promptAddContact();
      const confirmed = await promptAddConfirmation(
        contact.name,
        contact.phone,
        contact.category ?? ""
      );
      if (confirmed === null) {
        console.log("Operation cancelled.");
        return;
      }
      await this.storage.addContact(contact);
      console.log("Contact added successfully!");
    } catch (error: any) {
      console.error("Error adding contact:", error.message || error);
    }
  }
}
