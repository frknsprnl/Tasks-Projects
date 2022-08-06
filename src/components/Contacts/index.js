import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Furkan",
      phoneNumber: "123213",
    },
    {
      fullName: "Ahmet",
      phoneNumber: "1213",
    },
    {
      fullName: "Mehmet",
      phoneNumber: "123123213",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </>
  );
}

export default Contacts;
