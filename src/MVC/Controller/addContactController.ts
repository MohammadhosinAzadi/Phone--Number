import { IContactStorage } from "../../Interface/IContactStorage";
import { promptAddContact } from "../View/Cli/Prompts/PromptAddContact";
import { promptAddConfirmation } from "../View/Cli/Confirmations/promptAddConfirmation";

export class AddContactController {
  constructor(private storage: IContactStorage) {}

  async addContact(): Promise<void> {
    try {
        const contact = await promptAddContact();
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
        console.error("Error add contact:", error.message);
    }
}
}