const { program } = require("commander");

const contactsService = require("./contacts");

program
  .option("--a, --action <type>")
  .option("--i, --id <type>")
  .option("--n, --name <type>")
  .option("--e, --email <type>")
  .option("--p, --phone <type>");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
