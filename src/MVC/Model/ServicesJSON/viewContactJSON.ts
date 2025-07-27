import { getAllContactsJSON } from "../../../Repositories/JSON/getAllContactsJSON";
import { Record } from "../../../Typs/record";

export async function viewContactJSON(): Promise<Record[]> {
  return getAllContactsJSON();
}
