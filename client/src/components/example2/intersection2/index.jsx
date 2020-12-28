import React from 'react'
import styled from 'styled-components'
import {fonts, respond} from '../../../styles'
import {BsBuilding, BsHouse} from 'react-icons/bs'

export default function Intersection2() {
  return (
    <Container>
          <IconField>
            <BsBuilding color='#006A93'/>
            <TextField>
              <h3>Specialistische advies</h3>
              <p>en vakkundige uitvoering voor grote benodigen</p>
            </TextField>
          </IconField>
          <IconField>
            <BsHouse color='#FF6B35'/>
            <TextField>
              <h3>Ervaring en kennis</h3>
              <p>ook voor kleine opdrachgevers en particuleren</p>
            </TextField>
          </IconField>
      </Container>
  )
}

const Container = styled.div`
  padding: 5rem 0 5rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;
  

  ${()=>respond('l','flex-direction: row; justify-content: space-around; width:70%;')}


`
const IconField = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-columns: 8rem 1fr;

    svg{
      width: 5.7rem;
      height: 5.7rem;
      margin-right: 2rem;
      align-self: center;
    }
    
`

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  h3{
      max-width: 30rem;
      font-family: ${fonts.heading4};
      font-size: 1.9rem;
      font-weight: 600;
      color: ${p=>p.theme.grey3};
    }
    p{
      max-width: 30rem;
      font-family: ${fonts.heading4};
      font-size: 1.9rem;
      font-weight: 300;
      color: ${p=>p.theme.grey4};
    }

`
