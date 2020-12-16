import React from 'react'
import styled from 'styled-components'
import {HeadlineB2, Line, ParaB1} from '../../../styles'
import Video from '../../../assets/video-1.mp4'

export default function VideoBackground({headline, para}) {
  return (
    <Container>
      <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <HeadlineB2>{headline}</HeadlineB2>
      <Line/>
      <ParaB1 align='center'>{para}</ParaB1>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  video{
    position: absolute;
    top: 0;
    left:0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;

  }

`