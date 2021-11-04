import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

const Contacts = ({ contacts, setContacts }) => {
  const [filter, setFilter] = useState("");

  const addFilter = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter) {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(normalizedFilter);
      });
    }
    return contacts;
  };

  const deleteContact = (id) => {
    setContacts(() => {
      return contacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <section>
      <h2>Contacts</h2>
      <h3>Find contacts by name:</h3>
      <input type="text" onChange={addFilter} />
      <ul className={s.list}>
        {getFilteredContacts().map(({ id, name, number }) => {
          return (
            <li key={id} className={s.contact}>
              <div className={s.name}> {name}</div>
              <div className={s.number}>{number}</div>
              <button
                onClick={() => {
                  deleteContact(id);
                }}
                className={s.button}
              >
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};

export default Contacts;
