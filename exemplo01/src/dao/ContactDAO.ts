import { Contact, ContactModel } from "../domains/ContactModel";

export default class ContactDAO {
  async save(contact: Contact) {
    const savedContact = await ContactModel.create(contact);
    return savedContact;
  }

  async findByName(name: string) {
    const contacts = await ContactModel.find<Contact>({
      name: {
        $regex: name,
        $options: "i",
      },
    });

    return contacts;
  }
}
