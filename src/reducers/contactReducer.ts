import {
  Contact,
  ADD_CONTACT,
  REMOVE_CONTACT,
  ContactsActionTypes
} from '../types'

const initialState: Contact[] = []

const contactsReducer = (
  state = initialState,
  action: ContactsActionTypes
): Contact[] => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload]
    case REMOVE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload)
    default:
      return state
  }
}

export default contactsReducer
