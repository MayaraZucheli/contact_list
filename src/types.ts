export interface Contact {
  id: number
  fullName: string
  email: string
  phone: string
}

export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

interface AddContactAction {
  type: typeof ADD_CONTACT
  payload: Contact
}

interface RemoveContactAction {
  type: typeof REMOVE_CONTACT
  payload: number
}

export type ContactsActionTypes = AddContactAction | RemoveContactAction
