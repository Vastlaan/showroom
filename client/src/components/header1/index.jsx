import React from 'react'
import styled from 'styled-components'
import Img from '../../img/header-1.jpg'
import {respond, fonts} from '../../styles'

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
          <Button>Read more</Button>
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
  grid-template-rows: repeat(12,minmax(8.3vh, 10rem));

  ${()=>respond('l','grid-template-rows: repeat(12,1fr);')}
`

const Content = styled.div`
  grid-column: 2/-2;
  grid-row: 1/8;
  display: flex;
  flex-direction:column;
  justify-content: center;
  transform: translateY(-5rem);
    

  ${()=>respond('l',`
    grid-column: 2/7;
    grid-row: 2/-2;
    transform: translateY(-2rem);
  `)}

`
const Headline = styled.div`

  h1{
    font-family: ${fonts.heading1};
    font-size: 5rem;
    color: ${p=>p.theme.secondary};
  }
  h3{
    font-family: ${fonts.para1};
    font-size: 2.3rem;
    color: ${p=>p.theme.grey3};
  }
`

const Para = styled.div`
  max-width: 60rem;
  margin: 5rem 0;

  p{
    font-family: ${fonts.para1};
    font-size: 2.1rem;
    color: ${p=>p.theme.grey3};
  }
`
const Buttons = styled.div`

`
const Button = styled.button`
  width: 20rem;
  height: 5rem;
  color: ${p=>p.theme.grey8};
  border: 1px solid ${p=>p.theme.secondary};
  background-color: transparent;
  font-family: ${fonts.para1};
  font-size: 1.6rem;
  letter-spacing: .2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s;
  position:relative;
  overflow: hidden;
  z-index: 2;

  &:after{
    content: '';
    display: block;
    background-color: ${p=>p.theme.secondary};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .3s;
    z-index: -1;
  }

  &:hover{
    border: 1px solid ${p=>p.theme.grey3};
    color: ${p=>p.theme.grey3};
    &:after{
      top:100%;
    }
  }

  &:focus, :active{
    outline: none;
  }
`
const Image =styled.div`
  grid-column: 1/-1;
  grid-row: 8/-1;
  max-height: calc(80vh - 5rem);
  overflow:hidden;
  display:flex;
  align-items: center;

  ${()=>respond('l',`
    grid-column: 8/-1;
    grid-row: 1/-1;
  `)}

  img{
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
