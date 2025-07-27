import { Record } from "../../Typs/record";
import { IContactStorage } from "../../Interface/IContactStorage";
import { addContactJSON } from "../../Layers/BusinessLogicLayer/JSON/addContact"
import { removeContactJSON } from "../../Layers/BusinessLogicLayer/JSON/removeContact"
import { editContactJSON } from "../../Layers/BusinessLogicLayer/JSON/editContact";
import { editCategoryJSON } from "../../Layers/BusinessLogicLayer/JSON/editCategory";
import { getContactByPhone } from "../../Repositories/JSON/getContactByPhone"
import { getCategories } from "../../Repositories/JSON/getCategories";
import { viewContactJSON } from "../../Layers/BusinessLogicLayer/JSON/viewContact";

export class JSONStorage implements IContactStorage {
    async addContact(contact: Record): Promise<void> {
        await addContactJSON(contact);
    }

    async removeContact(phone: string): Promise<void> {
        await removeContactJSON(phone);
    }

    async editContact(originalPhone: string, updatedContact: Record): Promise<void> {
        await editContactJSON(originalPhone,updatedContact);
    }

    async editCategory(selectedCategory: string, newCategoryName: string): Promise<void> {
        await editCategoryJSON(selectedCategory,newCategoryName);
    }

    async viewContact(): Promise<Record[]> {
        return await viewContactJSON();    
    }

    async getCategories(): Promise<string[]> {
        return await getCategories();
    }
    
    async getContactByPhone(phone: string): Promise<void> {
        await getContactByPhone(phone);
    }
}