import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../reducers'
import { Contact } from '../types'
import { removeContact } from '../actions/contactsActions'

const ContactItem = styled.li`
  background-color: #bdf0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 18px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  button {
    background-color: #ff6347;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e74c3c;
    }
  }
`

const ContactListContainer = styled.ul`
  list-style: none;
  padding: 0;
`

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleRemoveContact = (id: number) => {
    dispatch(removeContact(id))
  }

  return (
    <ContactListContainer>
      {contacts.map((contact: Contact) => (
        <ContactItem key={contact.id}>
          <div>
            <strong>{contact.fullName}</strong>
            <p>Email: {contact.email}</p>
            <p>Telefone: {contact.phone}</p>
          </div>
          <button onClick={() => handleRemoveContact(contact.id)}>
            Remover
          </button>
        </ContactItem>
      ))}
    </ContactListContainer>
  )
}

export default ContactList
