import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {respond, fonts, Button3} from '../../styles'

export default function Navigation2() {
  return (
    <Container>
      <Logo>
          <Link to='/'>
            <h1>Max</h1>
            <h2>Bouw</h2>
          </Link>
      </Logo>
      
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
const Logo = styled.div`
  font-family: ${fonts.heading4};
  margin-right: 4.7rem;

  ${()=>respond('xl','flex: 1; margin-right: 0rem;')}

  
  a{
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  h1{
    font-weight: 900;
    color: ${p=>p.theme.secondary2};
    line-height: 1;
    font-size: 4.7rem;
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
  h2{
    font-weight: 300;
    line-height: 1;
    font-size: 4.7rem;
    color: ${p=>p.theme.grey7};
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
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
const ButtonMain = styled(Button3)`
  font-family: ${fonts.para4};
  text-transform: capitalize;
  font-size: 1.9rem;
  color: ${p=>p.theme.grey7};
`
const ButtonPlain = styled.button`
  background-color: transparent;
  border: none;
  font-family: ${fonts.para4};
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
