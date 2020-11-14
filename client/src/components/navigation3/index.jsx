import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {fonts, respond, ButtonFull, Section} from '../../styles'
import {RiTwitterLine, RiLinkedinBoxLine,RiFacebookBoxLine} from 'react-icons/ri'
import {BsThreeDotsVertical} from 'react-icons/bs'
import Layout from '../layout'
import LogoImage from '../../img/ShineNu.svg'


export default function Navigation3() {

  const [isVisible, setIsVisible]= useState(false)

  return (
    <Container>
      <HorizontalLayout>

        <Core>
          <Icon onClick={()=>setIsVisible(prevState=>!prevState)}>
            <BsThreeDotsVertical/>
          </Icon>

          <Link to='/'>
            <Logo>
              <img src={LogoImage} alt="logo"/>
            </Logo>
          </Link>
        </Core>

        

        <Menu visible={isVisible}>
          <Link style={{transition: 'all 1.1s'}} to='/'>
            Bedrijf
          </Link>
          <Link style={{transition: 'all .9s'}} to='/'>
            Diensten
          </Link>
          <Link style={{transition: 'all .7s'}} to='/'>
            Contact
          </Link>
          <Link style={{transition: 'all .5s'}} to='/'>
            <ButtonFull color='#AC4B44' color2='white'>Oferte</ButtonFull>
          </Link>
        </Menu>
      </HorizontalLayout>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  

  ${()=>respond('l','padding: 2.3rem 0;')}

`
const HorizontalLayout = styled.div`
  max-width: 1366px;
  margin:0 auto;
  
  display: flex;
  align-items: center;
  position: static;
  z-index: 9;

  ${()=>respond('l','padding: 0;')}

`
const Core = styled.div`
  position: static;
  z-index: 9;
  background-color: white;
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 1rem 0;
  ${()=>respond('l','padding: 0;')}
`
const Icon = styled.div`
  width: 5rem;
  height:5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${()=>respond('l','display: none;')}

  svg{
    color: ${p=>p.theme.secondary3};
    font-size: 3rem;
  }
`
const Logo = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  margin-left: 1rem;

  img{
    width: 20rem;
  }

`
const Menu = styled.nav`
  
  display: flex;
  flex:1;
  justify-content: space-between;
  align-items: flex-start;
  transition: all .3s;
  
  transform: ${p=>p.visible?'translateY(0%)':'translateY(-300%)'};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 8;
  background-color: white;
  flex-direction: column;
  width: 100%;
  padding: 4.7rem;



  ${()=>respond('l',`
    max-width: 50%;
    margin: 0 0 0 auto;
    transform: translateY(0%);
    position: static;
    background-color: transparent;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
  `)}

  a{
    font-family: ${fonts.heading4};
    color: ${p=>p.theme.grey4};
    font-size: 1.9rem;
    margin: 2.7rem;
    transition: all .6s;
    transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);
    transform: ${p=>p.visible?'translateY(0%)':'translateY(-250%)'};

    ${()=>respond('l','transform: translateY(0);margin: 1rem 2rem;')}

    &:hover{
      color: ${p=>p.theme.grey2};
    }
  }
`