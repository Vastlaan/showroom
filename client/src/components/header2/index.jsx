import React from 'react'
import styled from 'styled-components'
import Img from '../../img/header-1.jpg'
import {respond, fonts, SocialButton1, Button2, Button3} from '../../styles'
import {FiFacebook, FiInstagram, FiLinkedin} from 'react-icons/fi'

export default function Header2() {
  return (
    <Container>
      <Content>
        <Headline>
          <h1>Design matters</h1>
          <h3>details are what make design</h3>
        </Headline>
        <Para>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Rerum nam dolorum illum porro, corporis vitae ea quaerat doloribus! Fugiat, iure.
          </p>
        </Para>
        <Buttons>
          <Button3>Read more</Button3>
          <Button2>Read more</Button2>
        </Buttons>
      </Content>
      <Links>
        <SocialButton1 color="#8ea8c3"><FiFacebook/></SocialButton1>
        <SocialButton1 color="#8ea8c3"><FiInstagram/></SocialButton1>
        <SocialButton1 color="#8ea8c3"><FiLinkedin/></SocialButton1>
      </Links>
      
    </Container>
  )
}

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-image: linear-gradient(to right, rgba(0,3,23,.3), rgba(0,3,23,.3)), url(${Img});
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;

`
const Content = styled.div`
  padding: 5rem 0;
  grid-column: 2/-2;
  grid-row: 1/-1;
  display: flex;
  flex-direction:column;
  justify-content: center;
  z-index: 2;
    

  ${()=>respond('l',`
    grid-column: 2/7;
  `)}

`
const Headline = styled.div`

  h1{
    font-family: ${fonts.heading1};
    font-size: 6.8rem;
    color: ${p=>p.theme.secondaryLight};
    
    ${(p)=>respond('l',`
      color: ${p.theme.secondaryLight};
    `)}
  }
  h3{
    font-family: ${fonts.para1};
    font-size: 2.3rem;
    font-weight: 400;
    color: ${p=>p.theme.grey7};
    ${(p)=>respond('l',`
      color: ${p.theme.grey7};
    `)}
  }
`

const Para = styled.div`
  max-width: 30rem;
  margin: 5rem 0;
  ${()=>respond('l',`
    max-width: 60rem;
  `)}

  p{
    font-family: ${fonts.para1};
    font-size: 2.1rem;
    color: ${p=>p.theme.grey7};
    text-shadow: .2rem .2rem .2rem rgba(0,0,0,.9);
    ${(p)=>respond('l',`
      color: ${p.theme.grey7};
      text-shadow: .2rem .2rem .2rem rgba(0,0,0,0);
    `)}
  }
`
const Buttons = styled.div`
 
  button{
    margin: 0 2rem 2rem 0;
  }
`
const Links =styled.div`
  grid-column: 2/-1;
  grid-row: 2/3;
  overflow:hidden;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transform: translateY(-5rem);

  button{
    margin: 1rem;
  }

  ${()=>respond('l',`
    grid-column: -2/-1;
    grid-row: 1/-1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(0rem);
  `)}
`
