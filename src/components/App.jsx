import { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Redux/Store';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './Redux/ContactSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchInput from './FilterByName/FilterByName';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="container">
        <h1 className="phonebookHeader">Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <SearchInput />
        <ContactList />
      </div>
    </PersistGate>
  );
};

export default App;
