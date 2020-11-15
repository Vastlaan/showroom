import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../img/shine-header.png'
import {fonts, respond, ButtonFull, ButtonEmpty, Section, Content, Para1, Headline1} from '../../styles'

export default function Header4() {
  return (
    <Section>
      <Content>
        <Header>
          <Info>
            <Headline1>
              Cleaning <span>Services</span>
            </Headline1>
            <Para1>
              Solid betrouwbaar en betrokken schoonmakers. Altijd betaalbaar diensten waneer je dat nodig hebt.
            </Para1>
            <Buttons>
              <ButtonFull color='#AC4B44' color2='white'>Oferte</ButtonFull>
              <ButtonEmpty color='#AC4B44' color2='white'>Contact</ButtonEmpty>
            </Buttons>
          </Info>
          <Image>
            <img src={Img} alt="supervisor"/>
          </Image>
        </Header>
      </Content>
    </Section>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem 2.7rem;

  ${()=>respond('l','flex-direction: row;')}
  ${()=>respond('xl','padding: 1rem;')}

`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;

  ${()=>respond('l','flex-direction: row;')}
`
const Image =styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${()=>respond('m','max-width: 70%;')}
  ${()=>respond('l','max-width: 50%;')}

  img{
    width: 100%;
    object-fit: cover;
    object-position: center;

  }
`
