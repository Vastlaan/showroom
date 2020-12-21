import React from 'react'
import styled from 'styled-components'
import Loading from '../../../img/loading.svg'
import {ParaB1} from '../../../styles'

export default function() {
  return (
    <Container>
      <img src={Loading} alt="loading"/>
      <ParaB1>Loading data...</ParaB1>
    </Container>
  )
}

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f2f3;

`