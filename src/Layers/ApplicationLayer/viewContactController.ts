import { IContactStorage } from "../../Interface/IContactStorage";
import { promptViewContacts } from "../../Layers/PresentationLayer/Cli/Prompts/promptViewContacts";

export class ViewContactController {
  constructor(private storage: IContactStorage) {}

  async viewContacts(): Promise<void> {
    try {
      const contacts = await this.storage.viewContact();
      if (!contacts || contacts.length === 0) {
        console.log("No contacts found.");
        return;
      }
      promptViewContacts(contacts);
    } catch (error: any) {
      console.error("Error viewing contacts:", error.message || error);
    }
  }
}