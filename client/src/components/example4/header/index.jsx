import React from 'react'
import styled from 'styled-components'
import Img from '../../../img/t4-header.png'
import Img1 from '../../../img/t4-header-2.png'
import Img2 from '../../../img/t4-header-3.png'
import Img3 from '../../../img/t4-header-4.png'
import {fonts, respond, ContentWidth, ButtonT4} from '../../../styles'

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
            <ButtonT4>Contact</ButtonT4>
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

  ${()=>respond('s',`
    min-height: 60vh;
  `)}

  ${()=>respond('l',`
    min-height: 80vh;
  `)}

  ${()=>respond('xxl','padding-top: 14rem; min-height: 100vh;')}
 
`
const Grid = styled.div`
 display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: repeat(3, 1fr);
`
const Heading = styled.div`
  grid-column: 1/7;
  grid-row: 1/4;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  z-index: 10;
  animation: showUpPlain .6s;

  ${()=>respond('s',`
    grid-column: 4/7;
    grid-row: 1/3;
    justify-content: flex-start;
    margin-top: 0rem;
  `)}
  ${()=>respond('l',`
    grid-column: 3/5;
    grid-row: 1/-1;
    justify-self: center;
  `)}
  

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
  grid-column: 1/7;
  grid-row: 1/3;
  opacity: 0;
  animation: showUp .3s;
  animation-delay: .6s;
  animation-fill-mode: forwards;
  align-self: start;

  ${()=>respond('s',`
    grid-column: 1/3;
    grid-row: 1/4;
  `)}

  ${()=>respond('l',`
    grid-column: 1/4;
    grid-row: 1/2;
  `)}

  img{
    min-width: 40rem;
    max-width: 50rem;
  }
`
const Image2 = styled(Image)`
  grid-column: 1/4;
  grid-row: 1/3;
  opacity: 0;
  animation: showUpLeft .6s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  ${()=>respond('s',`
    grid-column: 2/4;
    grid-row: 1/3;
  `)}

  ${()=>respond('l',`
    grid-column: 2/4;
    grid-row: 1/3;
  `)}
`
const Image3 = styled(Image)`
  justify-self: center;
  grid-column: 1/7;
  grid-row: 2/4;
  opacity: 0;
  animation: showUpRight .6s;
  animation-delay: .7s;
  animation-fill-mode: forwards;

  ${()=>respond('s',`
    grid-column: 1/3;
    grid-row: 2/4;
  `)}

  ${()=>respond('l',`
    grid-column: 4/-1;
    grid-row: 1/3;
  `)}

  img{
    width: 50rem;
  }
`
const Info =styled.div`
  justify-self: center;
  align-self: center;
  grid-column: 1/7;
  grid-row: 4/5;
  padding: 2.7rem;
  z-index: 9;
  opacity: 0;
  animation: showUpBottom .6s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;

  ${()=>respond('s',`
    grid-column: 3/7;
    grid-row: 3/4;
  `)}

  ${()=>respond('l',`
    grid-column: 1/4;
    grid-row: 2/4;
  `)}

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