import { getAllContacts } from "../../../Repositories/SQLite/Contact/getAllContacts";
import { Record } from "../../../Typs/record"

export async function viewContactSQLite(): Promise<Record[]> {
    return getAllContacts();
  }