import React from 'react'
import styled from 'styled-components'
import {fonts} from '../../../styles'

export default function Footer() {
  return (
    <Container>
      <p>
        &copy; {new Date().getFullYear()} Template gemaakt door <a href="https://itcontext.nl">IT Context</a>. Alle rechten voorbehouden.
      </p>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  background-color: ${p=>p.theme.grey1};
  padding: 2.7rem 1.4rem;

  p{
    font-family: ${fonts.heading1};
    font-size: 1.4rem;
    color: white;
    text-align: center;
    font-weight: 300;
    letter-spacing: .2rem;

    a{
      padding: .4rem 1rem;
      background-color: ${p=>p.theme.yellow};
      color: black;
      margin: 1rem;
      font-weight: 600;
      display: inline-block;
      transform: rotate(-2deg);
      transition: all .3s;

      &:hover{
        transform: rotate(0deg);
      }
    }
  }
`
