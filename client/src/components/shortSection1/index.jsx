import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Net from '../decorative1'
import Img from '../../img/shortSection-1.jpg'
import {fonts, respond, ButtonFull} from '../../styles'
import {BsBuilding, BsHouse} from 'react-icons/bs'

export default function ShortSection1() {
  return (
    <Container>
      <CardHolder>
        <Card>
          <CardContent>
            <Logo>
              <Link to='/'>
                <h1>Max</h1>
                <h2>Bouw</h2>
              </Link>
            </Logo>
            <Para>Jouw Partner in bouwen</Para>
            <Link to='/' style={{textDecoration:'none'}}><ButtonFull style={{marginTop: '5rem'}} color='#FF6B35' color2='white'>Over Ons</ButtonFull></Link>
          </CardContent>
          <Net style={{ position: 'absolute', bottom:'-80px', left: '50px', zIndex: -1}} color='#006A93' gap="10px"/>
          <Net style={{ position: 'absolute', top:'-80px', right: '-50px', zIndex: -1}} color='#006A93' gap="10px"/>
        </Card>
      </CardHolder>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 0rem auto;
  padding: 13.8rem 0;
  overflow: hidden;
`
const CardHolder =styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 42rem;
  box-shadow: -2rem 2rem 5rem rgba(0,42,58,.9);
  ${()=>respond('m','width: 55rem; height: 42rem;box-shadow: 2rem 2rem 5rem rgba(0,42,58,.9);')}
  ${()=>respond('m','width: 70rem; height: 50rem;box-shadow: 2rem 2rem 5rem rgba(0,42,58,.9);')}
  ${()=>respond('xl','width: 90rem; height: 60rem; box-shadow: 5rem 5rem 8rem rgba(0,42,58,.9);')}

`
const Card = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right,#006A93, rgba(0,42,58,.2) ), url(${Img});
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  position: absolute;
  top: 0;
  left:0;
  padding: 4.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const CardContent = styled.div`
  height: 50%;

`
const Para = styled.p`
  font-family: ${fonts.heading4};
  font-size: 2.3rem;
  font-weight: 300;
  line-height: 1.4;
  color: ${p=>p.theme.grey7};

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
    font-size: 5.8rem;
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
  h2{
    font-weight: 300;
    line-height: 1;
    font-size: 5.8rem;
    color: ${p=>p.theme.grey7};
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
`

