import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Nav from './nav'
import Header from './header'
import Carousel from './carousel'
import {respond} from '../../styles'

export default function example1() {

  return (
    <>
      <Nav/>
      <Header/>
      <Carousel/>
    </>
      
  )
}

