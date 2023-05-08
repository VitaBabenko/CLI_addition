const contactsService = require("./contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;
    case "getContactById":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;
    case "addContact":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    case "removeContact":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Platon Babenko",
//   email: "babenkoplaton@mail.com",
//   phone: "(987) 236 8800",
// });
invokeAction({ action: "removeContact", id: "Lygu99GwLzTtUL-CEGyLG" });
