import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./PhonebookForm.module.css";

const PhonebookForm = ({ setContacts, contacts }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  };
  const addTel = (e) => {
    setTel(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();
    const contact = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });

    if (contact.length === 1) {
      alert(`${name} is already in your Contacts.`);
    }
    if (name === "" || tel === "") {
      alert(`Add name and number!`);
    } else {
      setContacts([...contacts, { id: uuidv4(), name: name, number: tel }]);
      setName("");
      setTel("");
    }
  };

  return (
    <>
      <form>
        <div>
          <label className={s.label}>Name</label>
        </div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={addName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <div>
          <label className={s.label}>Number</label>
        </div>
        <input
          type="tel"
          name="number"
          value={tel}
          onChange={addTel}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <div>
          <button type="submit" onClick={addContact} className="floatingButton">
            Add contact
          </button>
        </div>
      </form>
      <hr />
    </>
  );
};

PhonebookForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};

export default PhonebookForm;
