import { Record } from "../Typs/record";

export interface IContactStorage {
    addContact(contact: Record): Promise<void>;
    removeContact(phone: string | number): Promise<void>;
    editContact(originalPhone: string, updatedContact: Record): Promise<void>;
    editCategory(selectedCategory: string, newCategoryName: string): Promise<void>;
    viewContact(): Promise<Record[]>
    getCategories(): Promise<string[]>;
    getContactByPhone(phone: string): Promise<void>;
}