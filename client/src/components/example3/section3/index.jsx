import React from 'react'
import styled from 'styled-components'
import {respond, Section, Content, ButtonFull, Para2, Para1, Headline2, Headline3} from '../../../styles'
import Img from '../../../img/shine-4.jpg'
import Decoration from '../../decorative2'


export default function Section3() {
  return (
    <Section>
      
        <Bulk>
          <Info>
            <Headline2>Wij <strong>houden</strong>  <span>van</span> opruimen</Headline2>
            <Para1>Interieur designers maken jouw ruimte veilig en functioneel. Shoonmaken en inrichten voor elke soort gebouw.</Para1>
            <ButtonFull color='#AC4B44' color2='white'>Lees meer</ButtonFull>
          </Info>
          <Points>
            <div>
              <Headline3>01. Hotels</Headline3>
              <Para2>Interieur designers maken jouw ruimte veilig en functioneel. Shoonmaken en inrichten voor elke soort gebouw.</Para2>
            </div>
            <div>
              <Headline3>02. Bedrijven</Headline3>
              <Para2>Interieur designers maken jouw ruimte veilig en functioneel. Shoonmaken en inrichten voor elke soort gebouw.</Para2>
            </div>
            <div>
              <Headline3>03. Evenementen</Headline3>
              <Para2>Interieur designers maken jouw ruimte veilig en functioneel. Shoonmaken en inrichten voor elke soort gebouw.</Para2>
            </div>
            <div>
              <Headline3>04. Particuleren</Headline3>
              <Para2>Interieur designers maken jouw ruimte veilig en functioneel. Shoonmaken en inrichten voor elke soort gebouw.</Para2>
            </div>
          </Points>
        </Bulk>
        
      
      <Decoration gap='1.3rem' style={{position:'absolute', top: '100%', right: 0}}/>
    </Section>
  )
}
const Bulk = styled.div`
margin: 9rem auto;
 display: flex;
 flex-direction: column;
 

 ${()=>respond('l','flex-direction: row;')}
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.3rem;
  align-items: center;

  ${()=>respond('l','align-items: flex-start;')}

  button{
    max-width: 23rem;
    margin-bottom: 4.7rem;
  }
  h3{
    margin-bottom: 2.7rem;
  }
  p{
    margin-bottom: 4.7rem;
  }

`
const Points = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.7rem;
  padding: 2.3rem;

  ${()=>respond('l','grid-template-columns: 1fr 1fr;')}

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    ${()=>respond('l','align-items: flex-start;')}
  }
`