import React from 'react'
import styled from 'styled-components'
import {respond, Section, ButtonFull, Para1, Headline2} from '../../../styles'
import Img from '../../../img/shine-4.jpg'
import Decoration from '../../decorative2'

export default function Section2() {
  return (
    <Section>
        <BackgroundImg>
          <Separator/>
          <Bulk>
            <Headline2>Wij <strong>maken</strong> <span>jouw interieur</span> better</Headline2>
            <Para1>Interieur designers maken jouw ruimte veilig en functioneel. Shoonmaken en inrichten voor elke soort gebouw.</Para1>
            <ButtonFull color='#AC4B44' color2='white'>Lees meer</ButtonFull>
          </Bulk>
        </BackgroundImg>
      <Decoration gap='1.3rem' style={{position:'absolute', bottom: '100%', left: 0}}/>
    </Section>
  )
}
const BackgroundImg = styled.div`
  margin-top: 9rem;
  background: transparent url(${Img}) no-repeat top;
  background-size: auto 80%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  ${()=>respond('l',`flex-direction: row; background: transparent url(${Img}) no-repeat center; height: 70rem; background-size: cover;`)}
  

`
const Separator = styled.div`
  height: 0%;
  width: 10rem;
  background-color: white;
  margin: 0 0 0 50%;
  ${()=>respond('l','height: 100%;')}
`

const Bulk = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.7rem 2.3rem;
  background-color: white;
  height: 50%;
  align-items: center;

  ${()=>respond('l','height: 70%;align-items: flex-start;')}

  button{
    margin-top: 2.7rem;
    max-width: 23rem;
  }

  h3{
    margin-bottom: 2.7rem;
  }
  


`