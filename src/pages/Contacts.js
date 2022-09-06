import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IoMdPersonAdd } from 'react-icons/io';
import { Box } from 'components/Box';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import Button from 'components/Button';


const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box width="l" p={2} as="div" m="0 auto">
      <h1>Phonebook</h1>
      <Button type="button" onClick={toggleModal}>
        <IoMdPersonAdd size={18} /> Add Contact
      </Button>
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <ContactForm onCloseModal={toggleModal} />
        </Modal>
      )}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} pauseOnHover />
    </Box>
  );
}

export default Contacts;