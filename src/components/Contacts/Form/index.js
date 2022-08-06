import { useState, useEffect } from "react";

const initialValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit}>
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
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
