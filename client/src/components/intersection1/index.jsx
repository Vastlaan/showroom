import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {fonts, respond, ButtonFull} from '../../styles'

export default function Intersection1() {
  return (
    <Container>
      <Line/>
      <Header>Professioneel Team Vakmensen</Header>
      <Para>Het standaard stuk van eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Sectieijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.</Para>
      <Link to='/' style={{textDecoration:'none'}}><ButtonFull color='#FF6B35' color2='#fff'>Lees meer</ButtonFull></Link>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 13.8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Line = styled.div`
  margin: 5rem auto;
  width: 20rem;
  height: 1px;
  background-color: ${p=>p.theme.grey3};

`

const Header = styled.h1`
  font-family: ${fonts.heading4};
  font-size: 3.9rem;
  font-weight: 400;
  letter-spacing: 2%;
  text-align: center;
  line-height: 1;
  color: ${p=>p.theme.grey3};

`

const Para = styled.p`
  margin: 4.7rem auto;
  max-width: 50rem;
  font-family: ${fonts.heading4};
  font-size: 1.9rem;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 2%;
  text-align: center;
  color: ${p=>p.theme.grey4};

`