import React from 'react'
import styled from 'styled-components'
import Heading from '../utils/heading'
import {ButtonBSecondary, fonts} from '../../../styles'

function Subscribe(props, ref) {

  function submitContactForm(e){
    e.preventDefault();
  }

  return (
    <Container ref={ref} id="newsletter">
      <Heading headline='Neem contact met ons mee' para='Subscribe voor onze newsletter en blijf op de hoogte van onze aanbiedingen.'/>
      <Form onSubmit={submitContactForm}>
        <label>
          Jouw e-mailadres:
          <input type="text"/>
        </label>
        <ButtonBSecondary type='submit' color='#202020' color2='white'>Versturen</ButtonBSecondary>
      </Form>
    </Container>
  )
}

export default React.forwardRef(Subscribe)


const Container = styled.section`

  display: flex;
  flex-direction: column;
  align-itmes: center;
  max-width: 1255px;
  margin: 0rem auto;
  padding: 9rem 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4rem auto;

  label{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${fonts.heading1};
    font-size: 1.4rem;
  }
  input{
    border: 1px solid ${p=>p.theme.grey1};
    margin-bottom: 1.4rem;
    width: 35rem;
    padding: .9rem 1.4rem;
  }
`