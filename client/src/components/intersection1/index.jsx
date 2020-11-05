import React from 'react'
import styled from 'styled-components'
import {fonts, respond, ButtonFull} from '../../styles'

export default function Intersection1() {
  return (
    <Container>
      <Line/>
      <Header>Professioneel Team Vakmensen</Header>
      <Para>Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.</Para>
      <ButtonFull color='#FF6B35' color2='#fff'>Lees meer</ButtonFull>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 13.8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Line = styled.div`
  margin-bottom: 5rem;
  width: 20rem;
  height: 1px;
  background-color: ${p=>p.theme.grey3};

`

const Header = styled.h1`
  font-family: ${fonts.heading4};
  font-size: 4.7rem;
  font-weight: 400;
  letter-spacing: 2%;
  text-align: center;
  line-height: 1;
  color: ${p=>p.theme.grey3};

`

const Para = styled.p`
  margin: 4.7rem auto;
  max-width: 50rem;
  font-family: ${fonts.para4};
  font-size: 2.1rem;
  font-weight: 400;
  letter-spacing: 2%;
  text-align: center;
  color: ${p=>p.theme.grey4};

`