import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactReducer'

export const rootReducer = combineReducers({
  contacts: contactsReducer
})

export type RootState = ReturnType<typeof rootReducer>
