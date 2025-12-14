import styled from 'styled-components'

const corPrincipal = '#a7727d'
const corSecundaria = '#f7f5f5'


export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline: none;
  border: 1px solid #ccc;
  height: 40px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;


  &:focus {
    outline-color: ${corPrincipal};
  }
`

export const BtnPesquisar = styled.button`
  background-color: ${corPrincipal};
  border: 1px solid ${corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${corSecundaria};
  margin-left: 8px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #925c68;
  }
`
