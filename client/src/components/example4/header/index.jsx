import React from 'react'
import styled from 'styled-components'
import Img from '../../../img/t4-header.png'
import marked from 'marked'
import {fonts, respond, ContentWidth, ButtonT42, HeadlineT4, HeadlineT42} from '../../../styles'

export default function Header({data}) {

  const {heading, btn, url, img1, img2, img3} = data

  return (
    <Container>
      <ContentWidth>
        <Grid>
          <Image1>
            <img src={`https://api.itcontext.nl${img3.url}`} alt="sport"/>
          </Image1>
          <Image2>
            <img src={`https://api.itcontext.nl${img2.url}`} alt="sport"/>
          </Image2>
          <Info>
            <HeadlineT42 dangerouslySetInnerHTML={{__html: marked(heading)}}></HeadlineT42>
            <ButtonT42>{btn}</ButtonT42>
          </Info>
          <Heading>
            <HeadlineT4>
              De <span>si</span> gn
            </HeadlineT4>
          </Heading>
          <Image3>
            <img src={`https://api.itcontext.nl${img1.url}`} alt="sport"/>
          </Image3>
        </Grid>
      </ContentWidth>
    </Container>
  )
}







const Container = styled.header`
  width: 100%;
  min-height: 90vh;
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
  grid-template-rows: repeat(2, 1fr) 10rem;
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
  padding-bottom: 9rem;

  ${()=>respond('s',`
    grid-column: 3/7;
    grid-row: 3/4;
  `)}

  ${()=>respond('l',`
    grid-column: 1/4;
    grid-row: 3/4;
  `)}

  
`