import {useEffect} from 'react';
import { usePhonebookContext } from './../context';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

const App = () => {

const {contacts, setContacts} = usePhonebookContext();


useEffect(() => {
    
  const localStorageContacts = JSON.parse(localStorage.getItem('contacts'))

  if(localStorageContacts) {

  setContacts(localStorageContacts)
   
console.log("mounting")
  }

}, [setContacts]);

  useEffect(() => {
    
    localStorage.setItem('contacts', JSON.stringify(contacts));

  }, [contacts]);

  





    return (
      <div className={css.app}>
        <Section tittle="Phonebook">
          <ContactForm />
        </Section>
        <Section tittle="Contacts">
          <Filter />
          <ContactList  />
        </Section>
      </div>
    );
  }

export default App;
