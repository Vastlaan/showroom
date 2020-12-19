import React from 'react'
import styled from 'styled-components'
import {respond, fonts,} from '../../../styles'

export default function Heading({headline, para}) {
  return (
    <Container>
      <Headline>
        <div>
          <h1>{headline}</h1>
        </div>
        
      </Headline>
      <Para>
        <p>{para}</p>
      </Para>
      
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

`
const Headline = styled.div`
  border: 2px solid ${p=>p.theme.grey1};
  padding: 1rem;
  margin-bottom: 1.4rem;

  div{
    background-color: ${p=>p.theme.grey1};
    padding: 1.4rem;

    h1{
      font-size: 4.5rem;
      text-transform: uppercase;
      font-family: ${fonts.heading1};
      line-height: 1;
      color: #f4c700;
      text-align: center;
    }
  }
`

const Para = styled.div`
  
  width: 100%;
  position: relative;
  p{
    font-size: 2rem;
    font-family: ${fonts.heading1};
    text-transform: uppercase;
    color: ${p=>p.theme.grey2};
    max-width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  &:after{
    content: "";
    display: block;
    position:absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width:20%;
    height: 1px;
    background-color: ${p=>p.theme.grey1};

  }
   &:before{
    content: "";
    display: block;
    position:absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width:20%;
    height: 1px;
    background-color: ${p=>p.theme.grey1};

  }
`
