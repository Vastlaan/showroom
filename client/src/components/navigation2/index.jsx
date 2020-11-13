import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Logo1 from '../logo1'
import {respond, fonts, ButtonFull} from '../../styles'
import {CgMenuMotion} from 'react-icons/cg'


export default function Navigation2() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <Top>
        <Logo1/>
        <Icon onClick={()=>setIsVisible(prevState=>!prevState)}>
          <CgMenuMotion/>
        </Icon>
      </Top>
      
      <Buttons visible={isVisible}>
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
  display: flex;
  justify-content: space-between;
  position: relative;
`
const Top = styled.div`
  padding: 1.3rem;
  width: 100%;
  position: static;
  z-index: 11;
  background-color: ${p=>p.theme.primary2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${()=>respond('xl','padding: 2.3rem 0 0 6.8rem; width: auto;')}
`
const Buttons = styled.div`
  display: flex;
  
  transition: all .3s;
  transform: ${p=>p.visible?'translateY(0%)':'translateY(-200%)'};

  position: absolute;
  top:100%;
  left: 0;
  flex-direction: column;
  background-color: ${p=>p.theme.primary2};
  width:100%;
  align-items: flex-start;
  padding: 2.7rem;
  z-index: 10;



  ${()=>respond('xl',`
    transform: translateY(0%); 
    position: static;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    flex-direction: row;
    padding: 2.3rem 6.8rem 0 6.8rem;
  `)}

  a{
    text-decoration: none;
  }
`
const ButtonMain = styled(ButtonFull)`
  background-color: rgba(255,255,255,.3);
  color: ${p=>p.theme.grey7};
  font-family: ${fonts.heading4};
  margin: 1rem 0;
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
  margin: 1rem 0;
  

  

  &:hover{
    color: ${p=>p.theme.grey6};
  }

  &:active, :focus{
    outline: none;
  }
`

const Icon = styled.button`

  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus, :active{
    outline: none;
  }

  svg{
    font-size: 5rem;
    color: snow;
  }
  ${()=>respond('xl','display: none;')}


`