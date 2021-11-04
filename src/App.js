import React, { useEffect, useState } from "react";
import Contacts from "./components/contacts";
import PhonebookForm from "./components/phonebookForm";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <PhonebookForm contacts={contacts} setContacts={setContacts} />
      <Contacts contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
