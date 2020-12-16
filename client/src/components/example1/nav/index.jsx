import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {respond, fonts} from '../../../styles'

export default function Navigation() {
  return (
    <Container>

      <Link to='/template-1'>
        <Logo>
          <h1>Administratie Bedrijf</h1>
        </Logo>
      </Link>
      
      <Links>
        <Link to='/template-1'><li>diensten</li></Link>
        <Link to='/template-1'><li>newsletter</li></Link>
        <Link to='/template-1'><li>onze team</li></Link>
        <Link to='/template-1'><li>portfolio</li></Link>
        <Link to='/template-1'><li>over ons</li></Link>
        <Link to='/template-1'><li>blog</li></Link>
      </Links>
      
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 99;
  background-image: linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.1));
  
`
const Logo = styled.div`

cursor: pointer;
margin: 1.4rem;

  h1{
    font-size: 3.6rem;
    font-family: ${fonts.heading1};
    color: white;
    transition: all .3s;
    line-height: 1;
  }

`
const Links = styled.ul`

  margin: 0 1.4rem 1.4rem auto;
  list-style: none;
  display: flex;

  a{
    display: flex;
    height:100%;
  }
  

  li{
    max-width: 10rem;
    min-width: 10rem;
    text-align: center;
    margin: 0 .6rem;
    padding-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: ${fonts.heading1};
    color: white;
    transition: all .3s;
    line-height: 1.6;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;

    &:after{
      content: "";
      display: block;
      width: 100%;
      height:100%;
      position: absolute;
      top: -90%;
      left: 0;
      background-color: white;
      transition: all .3s;
      z-index: -1;
    }

    &:hover{

      color: black;

      &:after{
        top:0;
      }
    }
  }
`