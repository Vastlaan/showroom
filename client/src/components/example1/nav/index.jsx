import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { fonts, respond} from '../../../styles'

export default function Navigation({inSight}) {

  function scrollToElement(id){
    document.querySelector(`#${id}`).scrollIntoView({behavior: "smooth"})
  }
  return (
    <Container>

      <Link to='/template-1'>
        <Logo>
          <h1>Bedrijf's <span>Logo</span></h1>
        </Logo>
      </Link>
      
      <Links inSight={inSight}>
        <Link to='/template-1' onClick={()=>scrollToElement('carousel')}><Pass highlighted={inSight==='carousel'}>diensten</Pass></Link>
        <Link to='/template-1' onClick={()=>scrollToElement('newsletter')}><Pass highlighted={inSight==='newsletter'}>newsletter</Pass></Link>
        <Link to='/template-1' onClick={()=>scrollToElement('team')}><Pass highlighted={inSight==='team'}>onze team</Pass></Link>
        <Link to='/template-1' onClick={()=>scrollToElement('portfolio')}><Pass highlighted={inSight==='portfolio'}>portfolio</Pass></Link>
      </Links>
      
    </Container>
  )
}

const Container = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 99;
  //background-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1));
  background-color: ${p=>p.theme.grey1};
  border-left: 5px solid ${p=>p.theme.yellow};
  -webkit-backface-visibility: hidden;

  
`
const Logo = styled.div`

cursor: pointer;
margin: 0 1.4rem;
display: none;

${()=>respond('m',`
    display: block;
  `)}

  h1{
    font-size: 3.6rem;
    font-family: ${fonts.heading1};
    color: white;
    transition: all .3s;
    line-height: 1;

    span{
      color: ${p=>p.theme.yellow};
    }
  }

`
const Links = styled.ul`
  margin: 0 1.4rem .6rem auto;
  list-style: none;
  display: flex;

  ${()=>respond('m',`
    
  `)}

  a{
    display: flex;
    height:100%;
  }
  
`

const Pass = styled.li`

    max-width: 10rem;
    min-width: 10rem;
    text-align: center;
    margin: 0 .6rem;
    padding-top: 2.7rem;
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: ${fonts.heading1};
    color: ${p=>p.highlighted?'black':'white'};
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
      top: ${p=>p.highlighted?0:'-90%'};
      left: 0;
      background-color: ${p=>p.theme.yellow};
      transition: all .3s;
      z-index: -1;
    }

    &:hover{

      color: black;

      &:after{
        top:0;
      }
    }
`