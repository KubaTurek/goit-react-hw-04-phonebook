import css from './ContactForm.module.css';
import { usePhonebookContext } from '../../Context/PhonebookContext';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const { contacts, addContact } = usePhonebookContext();

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      event.target.name.value = '';
      event.target.number.value = '';
      return alert(`${newContact.name} "is already in contacts"`);
    } else {
      addContact(newContact);

      event.target.name.value = '';
      event.target.number.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <p className={css.label}>Name</p>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p className={css.label}>Number</p>
        <input
          type="tel"
          name="number"
          id="number"
          className={css.input}
          placeholder="phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
