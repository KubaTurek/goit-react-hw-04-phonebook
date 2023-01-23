import css from './ContactList.module.css';
import { usePhonebookContext } from './../../context/';

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

  const handleDelete = event => {
    const selectedId = event.currentTarget.id;

    if (event.target.nodeName === 'BUTTON') {
      deleteContacts(selectedId);
    }
  };

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {contactsArray.map(contact => {
          return (
            <li
              className={css.li}
              id={contact.id}
              key={contact.id}
              onClick={handleDelete}
            >
              <div>
                <span className={css.name}>{contact.name}</span>
                <span className={css.number}>{contact.number}</span>
              </div>

              <button type="button" className={css.delete}>
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
