import { useState } from "react";

import "../styles.css";

function List({ contacts, setContacts }) {
  const [filteredText, setFilteredText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
    );
  });

  const deleteContact = (contact_id) => {
    const newList = contacts.filter((item) => item.id !== contact_id);
    setContacts(newList);
  };

  return (
    <div>
      <input
        placeholder="Filter Contacts"
        value={filteredText}
        onChange={(e) => setFilteredText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact) => (
          <li key={contact.id}>
            {contact.fullName} {contact.phoneNumber}
            <span
              className="delete"
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              X
            </span>
          </li>
        ))}
      </ul>

      <p className="totalContacts">Total Contacts: ({filtered.length}) </p>
    </div>
  );
}

export default List;
