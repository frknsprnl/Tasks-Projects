import { useState } from "react";

function List({ contacts }) {
  const [filteredText, setFilteredText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter Contacts"
        value={filteredText}
        onChange={(e) => setFilteredText(e.target.value)}
      />

      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            {contact.fullName} - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
