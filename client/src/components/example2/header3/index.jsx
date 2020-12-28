import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Net from '../../decorative1'
import {fonts, respond, ButtonFull, ButtonEmpty} from '../../../styles'
import Img1 from '../../../img/header-3-1.jpg'
import Img2 from '../../../img/header-3-2.jpg'
import Img3 from '../../../img/header-3-3.jpg'

export default function Header3() {
  return (
    <Container>
      <Content>
        <h1>
          Bouwen <br/>
          renoveren <br/>
          onderhouden <br/>
        </h1>
        <p>Ervaring en kennis in grote bouwwerk en voor particuleren.</p>
        <Buttons>
          <Link to='/' style={{textDecoration:'none'}}><ButtonFull>Offerte</ButtonFull></Link>
          
          <Link to='/' style={{textDecoration:'none'}}><ButtonEmpty>Contact</ButtonEmpty></Link>
        </Buttons>
      </Content>
      <Pictures>
        <Image1>
          <ImageFrame>
            <img src={Img1} alt="bouwer"/>
          </ImageFrame>
          <Net style={{ position: 'absolute', bottom:'-40px', right: '-50px', zIndex: 1}}/>
        </Image1>
        <Image2>
          <ImageFrame>
            <img src={Img2} alt="bouwer"/>
          </ImageFrame>
          <Net style={{ position: 'absolute', top:'-50px', right: '-50px', zIndex: 1}}/>
        </Image2>
        <Image3>
          <ImageFrame>
            <img src={Img3} alt="bouwer"/>
          </ImageFrame>
          <Net style={{ position: 'absolute', bottom:'-30px', right: '-50px', zIndex: 1}}/>
        </Image3>
      </Pictures>
    </Container>
  )
}

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 2.3rem;
  grid-row-gap: 8.2rem;
  padding:  8.2rem 2.3rem;
  overflow: hidden;

  ${()=>respond('l','padding: 10rem 8.2rem; overflow: visible; ')}
  ${()=>respond('xxl','padding: 13.6rem; ')}
`
const Content = styled.div`
  grid-column: 1/-1;
  ${()=>respond('l','grid-column: 1/4;')}
  

  h1{
    font-family: ${fonts.heading4};
    font-size: 6.2rem; //8.2
    letter-spacing: -.3rem;
    font-weight: 700;
    color: ${p=>p.theme.grey7};
    line-height: 1;
    ${()=>respond('xxl','font-size: 6.7rem; ')}

  }
  p{
    margin: 2.3rem 0;
    font-family: ${fonts.heading4};
    font-size: 1.9rem;
    letter-spacing: .1rem;
    font-weight: 300;
    color: ${p=>p.theme.grey7};
    line-height: 1.6;
    max-width: 40rem;
  }
`
const Buttons = styled.div`
  margin: 8.2rem 0;
  width: 27rem;
  display: flex;
  justify-content: space-between;

`

const Pictures = styled.div`
  display: grid;
  grid-template-columns: repeat(8,1fr);
  grid-template-rows: repeat(6,1fr);
  grid-column: 1/-1;
  position: relative;
  

  ${()=>respond('l','grid-column: 4/-1; grid-template-columns: repeat(9,1fr);')}
`
const Image = styled.div`
  width: 20rem;
  height: 30rem;
  position: relative;
 
`
const ImageFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
   display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  z-index: 2;

  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${p=>p.theme.secondary2};
    opacity: .3;
    z-index: 6;
    

  }

  img{
    object-fit: cover;
    object-position: center;
    
    min-height: 100%;
    width: 100%;
  }
`

const Image1 = styled(Image)`
  grid-column: 1/4;
  grid-row: 3/6;
  z-index: 5;
  ${()=>respond('l','grid-column: 2/5;')}
`
const Image2 = styled(Image)`
  grid-column: 3/8;
  grid-row: 1/4;
  z-index: 4;
  ${()=>respond('l','grid-column:  4/8;')}
`
const Image3 = styled(Image)`
  grid-column: 5/-1;
  grid-row: 2/5;
  z-index: 3;
  ${()=>respond('l','grid-column:  6/-1;')}
`