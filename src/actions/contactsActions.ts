import {
  Contact,
  ADD_CONTACT,
  REMOVE_CONTACT,
  ContactsActionTypes
} from '../types'

let nextId = 0

export const addContact = (contact: Contact): ContactsActionTypes => {
  return {
    type: ADD_CONTACT,
    payload: { ...contact, id: nextId++ }
  }
}

export const removeContact = (id: number): ContactsActionTypes => {
  return {
    type: REMOVE_CONTACT,
    payload: id
  }
}
