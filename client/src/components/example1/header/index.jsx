import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../../img/header.jpg'
import {respond, fonts, HeadlineB1, ParaB1, ButtonBSecondary, Line} from '../../../styles'

export default function Header() {
  return (
    <BackgroundImage>
      <HeadlineB1>Jouw slogan gaat here</HeadlineB1>
      <Line/>
      <ParaB1 align='center'>Deze webiste template werd gemaakt door IT Context. Wij zijn trots op onze ontwerpen. Heeft u op maat gemakt website nodig? Dat is ook mogelijk, neem een contact met ons mee.</ParaB1>
      <ButtonBSecondary color="#f4c700">
        Lees meer
      </ButtonBSecondary>
    </BackgroundImage>
  )
}
const BackgroundImage = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( to bottom, rgba(0,0,0,.5), rgba(0,0,0,.2)), url(${Img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  p{
    margin: 1.4rem auto;
  }
`
