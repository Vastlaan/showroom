import React from 'react'
import styled from 'styled-components'
import {HeadlineB2, Line, ParaB1} from '../../../styles'
import Img from '../../../img/parallax.jpg'

export default function ParallaxBackground({headline, para}) {
  return (
    <Container>
      <HeadlineB2>{headline}</HeadlineB2>
      <Line/>
      <ParaB1 align='center'>{para}</ParaB1>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 32rem;
  background-image: linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)),url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
