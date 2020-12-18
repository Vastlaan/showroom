import React from 'react'
import styled from 'styled-components'
import Img from '../../../img/t4-header.png'
import Img1 from '../../../img/t4-header-2.png'
import Img2 from '../../../img/t4-header-3.png'
import Img3 from '../../../img/t4-header-4.png'
import {fonts, respond, ContentWidth} from '../../../styles'

export default function Header() {
  return (
    <Container>
      <ContentWidth>
        <Grid>

        
        <Image1>
          <img src={Img3} alt="sport"/>
        </Image1>
        <Image2>
          <img src={Img2} alt="sport"/>
        </Image2>
        <Info>
          <h3>Het beste ervaring voor de <strong>lagste prijs</strong>. Neem <strong>contact</strong> met ons.</h3>
          <Button>Contact</Button>
        </Info>
        <Heading>
          <h1>
            De <span>si</span> gn
          </h1>
        </Heading>
        <Image3>
          <img src={Img1} alt="sport"/>
        </Image3>
        </Grid>
      </ContentWidth>
    </Container>
  )
}
const Container = styled.header`
  width: 100%;
  min-height: 100vh;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center right;
  padding-top: 10rem;
 
`
const Grid = styled.div`
 display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: repeat(4, 1fr);
`
const Heading = styled.div`
  grid-column: 3/5;
  grid-row: 1/-1;
  display: flex;
  justify-self: center;
  animation: showUpPlain .6s;
  

  h1{
    padding-top: 7rem;
    font-family: ${fonts.roboto};
    font-size: 22rem;
    max-width: 46.5rem;
    color: white;
    text-shadow: .3rem .3rem 1rem rgba(0,0,0,.3);
    line-height: 0;
    text-align: center;
    span{
      display: block;
      color: ${p=>p.theme.grey1};
      margin: 0rem 0;
    }
  }
`

const Image= styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  
  img{
    width: 30rem;
  }
`
const Image1 = styled(Image)`
  grid-column: 1/3;
  grid-row: 1/3;
  opacity: 0;
  animation: showUp .3s;
  animation-delay: .6s;
  animation-fill-mode: forwards;
  align-self: start;
  img{
    min-width: 40rem;
    max-width: 50rem;
  }
`
const Image2 = styled(Image)`
  grid-column: 2/4;
  grid-row: 1/3;
  opacity: 0;
  animation: showUpLeft .6s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`
const Image3 = styled(Image)`
  justify-self: center;
  grid-column: 4/-1;
  grid-row: 1/3;
  opacity: 0;
  animation: showUpRight .6s;
  animation-delay: .3s;
  animation-fill-mode: forwards;
  img{
    width: 50rem;
  }
`
const Info =styled.div`
  justify-self: center;
  align-self: center;
  grid-column: 1/4;
  grid-row: 2/4;
  padding: 2.7rem;
  z-index: 9;
  opacity: 0;
  animation: showUpBottom .6s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;

  h3{
    font-family: ${fonts.roboto};
    font-size: 2.7rem;
    font-weight: 300;
    text-transform: capitalize;
    max-width: 50rem;
    margin-bottom: 1.4rem;
    line-height: 1;

    strong{
      font-weight: 400;
    }
  }
`
const Button = styled.button`
  position: static;
  z-index: 2;
  margin: .5rem 0;
  border: 1px solid black;
  padding: 1.5rem 4rem;
  background-color: transparent;
  font-family: ${fonts.roboto};
  font-size: 1.7rem;
  color: black;
  align-self: center;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    background-color: white;
  }
`