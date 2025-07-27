import { Record } from '../../../Typs/record';
import { validateName } from '../../../Validation/UI-Validation/validateName';
import { validatePhone } from '../../../Validation/UI-Validation/validatePhone';
import { editContactInJSON } from '../../../Layers/DataAccessLayer/JSON/editContactInJSON';

export async function editContactJSON(originalPhone: string, updatedContact: Record): Promise<void> {
  validateName(updatedContact.name);
  validatePhone(updatedContact.phone);
  await editContactInJSON(originalPhone, updatedContact);
}
