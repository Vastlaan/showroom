import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../img/shine-header.png'
import {fonts, respond, ButtonFull, ButtonEmpty, Section, Content} from '../../styles'

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
const Headline1 = styled.h1`
  font-family: ${fonts.poppins};
  font-size: 4.8rem;
  font-weight: 800;
  color: ${p=>p.theme.primary3};
  line-height: 1.2;

  ${()=>respond('l','font-size: 5.7rem;')}

  span{
    color: ${p=>p.theme.secondary3};
  }
`
const Para1 = styled.p`
  margin: 2.7rem 0 4.7rem 0;
  font-family: ${fonts.heading3};
  font-size: 1.9rem;
  line-height: 1.6;
  color: ${p=>p.theme.grey4};
  padding-left: 2rem;
  position:relative;
  max-width: 55rem;

  &::after{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: 1rem;
    height: 100%;
    background-color: ${p=>p.theme.secondary3};
  }
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
