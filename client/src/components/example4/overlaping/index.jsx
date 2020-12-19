import React from 'react'
import styled from 'styled-components'
import {respond} from '../../../styles'
import Img from '../../../img/t4-background-2.jpg'

export default function OverlapingComponent() {
  return (
    
      <Container>

      </Container>
    
  )
}

const Container = styled.div`

  width: 100%;
  min-height: 100vh;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center right;

`
