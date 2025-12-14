import styled from 'styled-components'

const corPrincipal = '#a7727d'
const corSecundaria = '#f7f5f5'

export const VagaContainer = styled.li`
  border: 1px solid ${corPrincipal};
  background-color: ${corSecundaria};
  color: ${corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;


  &:hover {
    background-color: ${corPrincipal};
    color: ${corSecundaria};


    a {
      border-color: ${corPrincipal};
      background-color: ${corSecundaria};
      color: ${corPrincipal};
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${corSecundaria};
  background-color: ${corPrincipal};
  color: ${corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;


  @media (max-width: 768px) {
    display: block;
  }
`
