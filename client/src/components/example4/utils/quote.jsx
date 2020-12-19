import React from 'react'
import styled from 'styled-components'
import {fonts, respond, Content} from '../../../styles'
import {BsChatQuoteFill} from 'react-icons/bs'

export default function QuoteComponent({headline, subline}) {
  return (
    <Background>
    <Content>
      
        <Container>
          <Quote><BsChatQuoteFill/></Quote>
          <Message>
            <h3>
              {headline}
            </h3>
            <h6>
              -{subline}
            </h6>
          </Message>
        </Container>
      
    </Content>
    </Background>
  )
}
const Container = styled.div`

  
  display: flex;
  flex-direction: column;
  position: relative;
  border:5px solid ${p=>p.theme.primary};
  width: 100%;
  margin: 0 auto;
  padding: 6rem 2.7rem;

  ${()=>respond('l','width: 80%;')}


`
const Background = styled.section`
  background-image: linear-gradient(to bottom,#DCE0E1, #FEFEFE );
  padding: 1.4rem;
  padding-bottom: 9rem;
`
const Quote = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  

  ${()=>respond('l','width: 20rem;')}
  
  svg{
    font-size: 9rem;
    color: ${p=>p.theme.primary};

    ${()=>respond('l','font-size: 12rem;')}
  }
`
const Message= styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
  padding: 3.6rem 0 3.6rem 0;
  justify-content:center;
  height: 100%;
  font-family: ${fonts.roboto};
  

  ${()=>respond('l','margin-left: 20rem;')}

  h3{
    text-align: center;
    font-size: 2.7rem;
    line-height: 1;
    font-weight: 300;
    font-style: italic;
    margin-bottom: 1.4rem;
    color: ${p=>p.theme.grey3};

    ${()=>respond('l','text-align: left;')}
  }
  h6{
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: .2rem;
    text-align: center;
    ${()=>respond('l','text-align: left;')}

  }
`