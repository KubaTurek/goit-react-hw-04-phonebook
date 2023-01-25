import css from './ContactList.module.css';
import { usePhonebookContext } from '../../Context/PhonebookContext';

const ContactList = () => {
  const { contacts, filter, deleteContacts } = usePhonebookContext();

  let contactsArray = contacts;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts) {
    contactsArray = filteredContacts;
  } else {
    contactsArray = contacts;
  }

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {contactsArray.map(contact => {
          return (
            <li className={css.li} key={contact.id}>
              <div>
                <span className={css.name}>{contact.name}</span>
                <span className={css.number}>{contact.number}</span>
              </div>

              <button
                type="button"
                className={css.delete}
                onClick={() => deleteContacts(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
