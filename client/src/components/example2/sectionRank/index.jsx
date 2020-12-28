import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../../img/sectionRank-1.jpg'
import {BsFillStarFill} from 'react-icons/bs'
import {fonts, respond, ButtonFull, ButtonEmpty} from '../../../styles'

export default function Rank1() {
  return (
    <Container>
      <ImageContainer>
        <img src={Img} alt="building"/>
      </ImageContainer>
      <Content>
        <h1>Ideaal voor groot en klein bouwwerk</h1>
        <p>Bereik de juiste doelgroup en overtuig hen om contact met je op te nemen</p>
        <Buttons>
          <ButtonFull color='#006A93' color2='#fff'>Offerte</ButtonFull>
          <ButtonEmpty color='#006A93'>Contact</ButtonEmpty>
        </Buttons>
        <Ranking>
          <div>
            <BsFillStarFill/>
            <BsFillStarFill/>
            <BsFillStarFill/>
            <BsFillStarFill/>
            <BsFillStarFill/>
          </div>
          <p>positief beoordeeld door 91% klanten</p>
        </Ranking>
      </Content>
      
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: #E5E5E5;
  
  ${()=>respond('l','grid-template-columns: 1fr 1fr;')}

 

`
const ImageContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80rem;
  position: relative;
  z-index: 2;

   &::before{
    content: '';
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(229,229,229,.6), rgba(229,229,229,1));

    ${()=>respond('l','background-image: linear-gradient(to right, rgba(229,229,229,.3), rgba(229,229,229,1));')}
  }
  
  img{
    max-height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4.7rem;
  grid-column: 1/2;
  grid-row: 1/2;
  position: relative;
  z-index: 3;

  ${()=>respond('l','grid-column: 2/3; margin-left:0;')}

  h1{
    max-width: 40rem;
    font-family: ${fonts.heading4};
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 1.1;
    color: ${p=>p.theme.grey2};
  }
  p{
    max-width: 40rem;
    font-family: ${fonts.heading4};
    font-size: 1.9rem;
    font-weight: 300;
    line-height: 1.4;
    color: ${p=>p.theme.grey4};
  }
`
const Buttons = styled.div`
  margin: 8.2rem 0 4.1rem 0;
  width: 27rem;
  display: flex;
  justify-content: space-between;

`
const Ranking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40rem;

  div{
    width: 18rem;

    svg{
      margin: .2rem;
      width: 3rem;
      height: 3rem;
      color: ${p=>p.theme.secondary2};
    }
  }
  p{
    max-width: 20rem;
    font-family: ${fonts.heading4};
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.4;
    color: ${p=>p.theme.grey4};
  }
`
