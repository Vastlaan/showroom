import React from 'react'
import styled from 'styled-components'
import {respond, Section, Content, ButtonFull, ButtonEmpty, Para2, Headline4} from '../../styles'
import Decoration from '../decorative2'

export default function Section4() {
  return (
    <Section>
      <Content>
        <Bulk>
          <Info>
            <Headline4>Wil je met ons samenwerken?</Headline4>
            <Para2 color='white'>Solid betrouwbaar en betrokken schoonmakers. Altijd betaalbaar diensten waneer je dat nodig hebt.</Para2>
          </Info>
          <Buttons>
            <ButtonFull color='white' color2='#AC4B44'>Offerte</ButtonFull>
            <ButtonEmpty color='white' color2='#AC4B44'>Contact</ButtonEmpty>
          </Buttons>
        </Bulk>
      </Content>
      <Decoration gap='1.3rem' style={{position:'absolute', bottom: '0', left: 0}}/>
    </Section>
  )
}

const Bulk= styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  background-color: ${p=>p.theme.secondary3};
`
const Info = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.7rem;

  ${()=>respond('l','grid-column: 1/3;')}

`
const Buttons = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 4.7rem 4.7rem;


  ${()=>respond('l','grid-column: 3/4; justify-content: center; flex-direction: column;')}
`