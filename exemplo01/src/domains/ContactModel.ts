import { Document, Schema, model } from "mongoose";
import EmailValidator from "email-validator";

export interface Contact extends Document {
  name: string;
  email: string;
  phone: string;
  birthday: Date;
}

const schema = new Schema<Contact>({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  birthday: { type: Date, required: true },
});

export const ContactModel = model<Contact>("Contact", schema);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateContactInputs = (contactObj: any) => {
  const { name, email, phone, birthday } = contactObj;

  const errorMessages: string[] = [];

  if (!name) {
    errorMessages.push("Name cannot be empty");
  }

  if (email && !EmailValidator.validate(email)) {
    errorMessages.push("Invalid email");
  }

  if (!phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
    errorMessages.push("Phone must follow pattern (00) 00000-0000");
  }

  // yyyy-mm-dd
  if (birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const birthdayObj = new Date(birthday);

    if (birthdayObj >= new Date()) {
      errorMessages.push("Birthday must be previous to today");
    }
  } else {
    errorMessages.push("Birthday must follow pattern YYYY-MM-DD");
  }

  return errorMessages;
};
