import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addContact } from '../actions/contactsActions'
import { Contact } from '../types'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

const InputField = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const SubmitButton = styled.button`
  background-color: #4c8baf;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7ebce0;
  }
`

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addContact({ id: -1, fullName, email, phone }))
    setFullName('')
    setEmail('')
    setPhone('')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Nome completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputField
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <SubmitButton type="submit">Adicionar Contato</SubmitButton>
    </FormContainer>
  )
}

export default ContactForm
