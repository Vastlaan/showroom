import React from 'react'
import styled from 'styled-components'
import Img from '../../img/header-1.jpg'
import {respond, fonts, Button1, SocialButton1} from '../../styles'
import {FiFacebook, FiInstagram, FiLinkedin} from 'react-icons/fi'

export default function Header1() {
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
          <Button1>Read more</Button1>
          <div>
            <SocialButton1><FiFacebook/></SocialButton1>
            <SocialButton1><FiInstagram/></SocialButton1>
            <SocialButton1><FiLinkedin/></SocialButton1>
          </div>
        </Buttons>
        
      </Content>
      <Image>
        <img src={Img} alt="abstract header"/>
      </Image>
    </Container>
  )
}

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

`
const Content = styled.div`
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
      color: ${p.theme.secondary};
    `)}
  }
  h3{
    font-family: ${fonts.para1};
    font-size: 2.3rem;
    font-weight: 400;
    color: ${p=>p.theme.grey7};
    ${(p)=>respond('l',`
      color: ${p.theme.grey3};
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
    color: ${p=>p.theme.grey8};
    text-shadow: .2rem .2rem .2rem rgba(0,0,0,.9);
    ${(p)=>respond('l',`
      color: ${p.theme.grey3};
      text-shadow: .2rem .2rem .2rem rgba(0,0,0,0);
    `)}
  }
`
const Buttons = styled.div`
  
  div{
    margin-top: 2rem;
    display: flex;
    button{
      margin-right: 2rem;
    }
  }
`
const Image =styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  max-height: 60rem;
  overflow:hidden;
  display:flex;
  align-items: center;

  ${()=>respond('l',`
    grid-column: 8/-1;
    max-height: calc(70vh - 5rem);
    
  `)}

  img{
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
