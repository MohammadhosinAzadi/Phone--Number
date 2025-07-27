import { Record } from "../../Typs/record";
import { IContactStorage } from "../../Interface/IContactStorage";
import { addContactsSQLite } from "../../Layers/BusinessLogicLayer/SQLite/addContact"
import { removeContactsSQLite } from "../../Layers/BusinessLogicLayer/SQLite/removeContact"
import { editContactSQLite } from "../../Layers/BusinessLogicLayer/SQLite/editContact";
import { editCategorySQLite } from "../../Layers/BusinessLogicLayer/SQLite/editCategory";
import { getContactByPhone } from "../../Repositories/SQLite/Contact/getContactByPhone"
import { getCategories } from "../../Repositories/SQLite/Category/getCategories"
import { viewContactSQLite } from "../../Layers/BusinessLogicLayer/SQLite/viewContact";

export class SQLiteStorage implements IContactStorage {
    async addContact(contact: Record): Promise<void> {
        await addContactsSQLite(contact);
    }

    async removeContact(contactId: string): Promise<void> {
        await removeContactsSQLite(contactId);
    }

    async editContact(originalPhone: string, updatedContact: Record): Promise<void> {
        await editContactSQLite(originalPhone,updatedContact);
    }

    async editCategory(selectedCategory: string, newCategoryName: string): Promise<void> {
        await editCategorySQLite(selectedCategory,newCategoryName);
    }

    async viewContact(): Promise<Record[]> {
        return await viewContactSQLite();    
    }

    async getCategories(): Promise<string[]> {
       return await getCategories();
    }

    async getContactByPhone(phone: string): Promise<void> {
        await getContactByPhone(phone);
    }
}