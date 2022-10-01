import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles.css";

const initialValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button>Add Contact</button>
      </div>
    </form>
  );
}

export default Form;
