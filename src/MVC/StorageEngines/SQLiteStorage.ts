import { Record } from "../../Typs/record";
import { IContactStorage } from "../../Interface/IContactStorage";
import { addContactsSQLite } from "../../MVC/Model/ServicesSQLite/addContactsSQLite"
import { removeContactsSQLite } from "../../MVC/Model/ServicesSQLite/removeContactsSQLite"
import { editContactsSQLite } from "../../MVC/Model/ServicesSQLite/editContactsSQLite";
import { editCategorySQLite } from "../../MVC/Model/ServicesSQLite/editCategorySQLite";
import { getContactByPhone } from "../../Repositories/SQLite/Contact/getContactByPhone"
import { getCategories } from "../../Repositories/SQLite/Category/getCategories"
import { viewContactSQLite } from "../../MVC/Model/ServicesSQLite/viewContactSQLite";

export class SQLiteStorage implements IContactStorage {
    async addContact(contact: Record): Promise<void> {
        await addContactsSQLite(contact);
    }

    async removeContact(contactId: number): Promise<void> {
        await removeContactsSQLite(contactId);
    }

    async editContact(originalPhone: string, updatedContact: Record): Promise<void> {
        await editContactsSQLite(originalPhone,updatedContact);
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