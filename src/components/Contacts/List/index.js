function List({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.fullName} - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
