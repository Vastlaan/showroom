import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import {Button1, Button2, SocialButton1} from '../../styles'
import {MdWork} from 'react-icons/md'

export default function Buttons() {
  return (
    <Layout>
      <Container>
        <Button1>Button 1</Button1>
        
        <Button2 color='#34495E'>Button 2</Button2>
   
        
        <SocialButton1><MdWork/></SocialButton1>
    </Container>
    </Layout>
    
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  button{
    margin: 2rem;
  }

`
