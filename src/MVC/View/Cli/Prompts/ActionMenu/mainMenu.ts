import inquirer from 'inquirer';
import { Action } from '../../../../../MVC/View/Cli/Prompts/ActionMenu/actions.enum';
import { loadControllers, Controllers } from '../../../../../Core/MVC/loadControllers';

export const mainMenu = async () => {
  const {
    addContactController,
    removeContactController,
    viewContactController,
    editContactController,
    editCategoryController
  }: Controllers = await loadControllers();

  try {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: [
          Action.AddContact,
          Action.RemoveContact,
          Action.ViewContacts,
          Action.EditContacts,
          Action.EditCategory,
          Action.Exit,
        ],
      },
    ]);

    switch (action) {
      case Action.AddContact:
        await addContactController.addContact();
        break;
      case Action.RemoveContact:
        await removeContactController.removeContact();
        break;
      case Action.ViewContacts:
        await viewContactController.viewContacts();
        break;
      case Action.EditContacts:
        await editContactController.editContact();
        break;
      case Action.EditCategory:
        await editCategoryController.editCategory();
        break;
      case Action.Exit:
        process.exit(0);
        break;
      default:
        console.log('Invalid action');
        break;
    }
  } catch (error: any) {
    console.error('An error occurred:', error.message || error);
  }
};
