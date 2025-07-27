import { getAllContacts } from "../../../Repositories/SQLite/Contact/getAllContacts";
import { Record } from "../../../Typs/record";

export const viewContactSQLite = async (): Promise<Record[]> => {
  const contacts = await getAllContacts();
  return contacts;
};
