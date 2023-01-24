import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
export const PhonebookContext = createContext();

export const usePhonebookContext = () => useContext(PhonebookContext);

export const PhonebookProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const selectFilter = value => {
    setFilter(value);
  };

  return (
    <PhonebookContext.Provider
      value={{
        contacts,
        setContacts,
        filter,
        addContact,
        selectFilter,
        deleteContacts,
      }}
    >
      {children}
    </PhonebookContext.Provider>
  );
};

PhonebookProvider.propTypes = {
  children: PropTypes.node
}