import { Record } from "../../Typs/record";
import { IContactStorage } from "../../Interface/IContactStorage";
import { addContactJSON } from "../../MVC/Model/ServicesJSON/addContactJSON"
import { removeContactJSON } from "../../MVC/Model/ServicesJSON/removeContactJSON"
import { editContactJSON } from "../../MVC/Model/ServicesJSON/editContactJSON";
import { editCategoryJSON } from "../../MVC/Model/ServicesJSON/editCategoryJSON";
import { getContactByPhone } from "../../Repositories/JSON/getContactByPhone"
import { getCategories } from "../../Repositories/JSON/getCategories";
import { viewContactJSON } from "../../MVC/Model/ServicesJSON/viewContactJSON";

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