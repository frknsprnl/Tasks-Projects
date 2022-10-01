import { useState, useEffect } from "react";

import "./styles.css";

import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1 className="header">Contacts</h1>

      <List contacts={contacts} setContacts={setContacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contacts;
