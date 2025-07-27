import { Record } from "../../../Typs/record";
import { validateName } from "../../../Validation/UI-Validation/validateName";
import { validatePhone } from "../../../Validation/UI-Validation/validatePhone";
import { editContactInSQLite } from "../../../Layers/DataAccessLayer/SQLite/editContactInSQLite";

export async function editContactSQLite(originalPhone: string, updatedContact: Record): Promise<void> {
  validateName(updatedContact.name);
  validatePhone(updatedContact.phone);
  await editContactInSQLite(originalPhone, updatedContact);
}
