import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Nav from './nav'
import Header from './header'
import Carousel from './carousel'
import ParallaxBackground from './utils/parallaxBackground'
import VideoBackground from './utils/videoBackground'
import Subscribe from './subscribe'
import {respond} from '../../styles'

export default function example1() {

  return (
    <>
      <Nav/>
      <Header/>
      <Carousel/>
      <ParallaxBackground 
        headline="Wij ontwerpen creative websites" 
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusamus in dicta deserunt modi, sapiente eveniet at ipsum qui. Et possimus dolorem non praesentium excepturi ipsum consectetur, aliquam laboriosam?"
      />
      <Subscribe/>
      <VideoBackground 
        headline="Video Background" 
        para="Simple en effective"
      />
    </>
      
  )
}

