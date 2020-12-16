import React, {useRef} from 'react'
import styled from 'styled-components'
import Img1 from '../../../img/carousel-1.png'
import Img2 from '../../../img/carousel-2.png'
import {respond, fonts} from '../../../styles'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'



export default function Features() {

  const features = useRef()

  const slideFeatures = (direction) =>{
    if(direction==='left'){
      features.current.scrollBy({
        top: 0,
        left: "-400",
        behavior: 'smooth'
      });
    }else{
      features.current.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
      });
    }
  }
  return (
    <Container ref={features}>
      <SwitcherL onClick={()=>slideFeatures('left')}><MdChevronLeft/></SwitcherL>
      {data.map((feature, i)=>{
        return(
          <Feature key={feature.id}>
            <div>
              <img src={feature.img} alt="feature item"/>
            </div>
            <h3>{feature.heading}</h3>
            <p>{feature.para}</p>
          </Feature>
        )
      })}
      <SwitcherR onClick={()=>slideFeatures('right')}><MdChevronRight/></SwitcherR>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  margin: 3.6rem 0;
  position: relative;
`
const Feature = styled.div`
  display:flex;
  flex-direction: column;
  min-width: calc(25% - 2rem);
  align-items: center;
  margin-right: 2rem;

  div{
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    

    img{
      width: 20rem;
      height: 20rem;
    }
  }
  h3{
    font-family: ${fonts.heading1};
    font-size: 3rem;
    font-weight: 300;
    color: ${p=>p.theme.grey2};
    line-height: 1;
    text-align: center;
    margin-bottom: 1.4rem;
  }
  p{
    font-family: ${fonts.heading1};
    font-size: 1.4rem;
    font-weight: 300;
    color: ${p=>p.theme.grey3};
    text-align: center;
    flex:1;
  }
`
const Switcher = styled.button`
  position: sticky;
  top:50%;
  cursor: pointer;
  border: 1px solid ${p=>p.theme.grey1};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;
  width:4rem;
  height: 4rem;

  &:hover{
    background-color: ${p=>p.theme.grey1};

    svg{
      color: white;
    }
  }

  svg{
    font-size: 3.6rem;
  }
`
const SwitcherL = styled(Switcher)`
  left:0;
`
const SwitcherR = styled(Switcher)`
  right:0;
`

const data = [
  {
    id:"feature-1",
    img:Img1,
    heading: "Parallax Effecten",
    para: "Dit is een voorbeeld text. Wij werken hard om jouw beste mogelijk ervaring aan te bieden. Neem contact met ons op. "
  },
  {
    id:"feature-2",
    img:Img2,
    heading: "Parallax effecten",
    para: "Wij werken hard om jouw beste mogelijk ervaring aan te bieden. Neem contact met ons op. "
  },
  {
    id:"feature-3",
    img:Img1,
    heading: "Achtergrond beeld",
    para: "Dit is een voorbeeld text. Wij werken hard om jouw beste mogelijk ervaring aan te bieden. Neem contact met ons op. "
  },
  {
    id:"feature-4",
    img:Img2,
    heading: "Animaties",
    para: "Wij werken hard om jouw beste mogelijk ervaring aan te bieden. Neem contact met ons op. "
  },
  {
    id:"feature-5",
    img:Img1,
    heading: "Ontwerp",
    para: "Dit is een voorbeeld text. Alsnog alleen maar voorbeeld. Wij werken hard om jouw beste mogelijk ervaring aan te bieden. Neem contact met ons op. "
  }
]