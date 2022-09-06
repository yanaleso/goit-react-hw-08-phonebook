import ContactListItem from "components/ContactListItem";
import { Item } from './ContactList.styled';
import { useMemo } from 'react';
import { useGetContactsQuery } from "redux/contacts/services/contactsApi";
import { useSelector } from "react-redux";
import { getFilter } from "redux/contacts/contactSelectors";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "components/Box";

const ContactList = () => {
    const { data: contacts = [], error, isLoading } = useGetContactsQuery();
    const filter = useSelector(getFilter);
    const visibleContacts = useMemo(() => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    }, [contacts, filter]);

    return (
        <>
            {error && (<p>Something went wrong. Please try again.</p>)}
            {isLoading ? (<Box display="flex" justifyContent="center" pt={4}><ClipLoader color="#757575" /></Box>) :
                (<ul>
                    {visibleContacts.map((contact) => (
                        <Item key={contact.id}>
                            <ContactListItem contact={contact} />
                        </Item>
                    ))}
                </ul>)
            }
        </>
    )
}

export default ContactList;