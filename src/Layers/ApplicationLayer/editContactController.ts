import { IContactStorage } from "../../Interface/IContactStorage";
import { Record } from "../../Typs/record";
import { promptEditContact } from "../../Layers/PresentationLayer/Cli/Prompts/promptEditContact";       
import { getPromptUpdatedData } from "../../Layers/PresentationLayer/Cli/Prompts/promptEditContact";     

export class EditContactController {
  constructor(private storage: IContactStorage) {}

  async editContact(): Promise<void> {
    try {
      const phone = await promptEditContact();
      if (phone === null) {
        console.log("Operation cancelled or no phone entered.");
        return;
      }

      const contact = await this.storage.getContactByPhone(phone);
      if (contact === null) {
        console.log("Contact not found.");
        return;
      }
      const updatedData: Record = await getPromptUpdatedData(contact);
      await this.storage.editContact(phone, updatedData);
      console.log(" Contact updated successfully!");
    } catch (error: any) {
      console.error("Error editing contact:", error.message);
    }
  }
}