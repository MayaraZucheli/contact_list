import React from 'react'
import { Provider } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { createStore } from 'redux'
import { rootReducer } from './reducers'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
  }
`

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

const store = createStore(rootReducer)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <Container>
          <h1>Lista de Contatos</h1>
          <ContactList />
          <h2>Adicionar Novo Contato</h2>
          <ContactForm />
        </Container>
      </>
    </Provider>
  )
}

export default App
