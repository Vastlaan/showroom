import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Logo1 from '../logo1'
import {respond, fonts, ButtonFull} from '../../styles'

export default function Navigation2() {
  return (
    <Container>
      
      <Logo1/>
      <Buttons>
        <Link to='/'><ButtonPlain>Diensten</ButtonPlain></Link>
        <Link to='/'><ButtonPlain>Bedrijf</ButtonPlain></Link>
        <Link to='/'><ButtonPlain>Over Ons</ButtonPlain></Link>
        <Link to='/'><ButtonPlain>Contact</ButtonPlain></Link>
        <Link to='/'><ButtonMain>Offerte</ButtonMain></Link>
      </Buttons>
    </Container>
  )
}

const Container = styled.nav`
  width: 100%;
  padding: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${()=>respond('l','padding: 2.3rem 6.8rem;')}
  
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  a{
    text-decoration: none;
  }
`
const ButtonMain = styled(ButtonFull)`
  background-color: rgba(255,255,255,.3);
  color: ${p=>p.theme.grey7};
  font-family: ${fonts.heading4};
`
const ButtonPlain = styled.button`
  background-color: transparent;
  border: none;
  font-family: ${fonts.heading4};
  font-weight: 300;
  font-size: 1.9rem;
  color: ${p=>p.theme.grey7};
  cursor: pointer;
  transition: all .3s;
  display: none;

  ${()=>respond('xl','display: block;')}

  &:hover{
    color: ${p=>p.theme.grey6};
  }

  &:active, :focus{
    outline: none;
  }
`
