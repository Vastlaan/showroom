import React from 'react'
import styled from 'styled-components'
import Heading from '../utils/heading'
import Features from './features'
import {respond} from '../../../styles'

function Carousel(props, ref) {
  return (
    <SectionB ref={ref} id='carousel'>
      <Heading headline="Unique Ontwerpen" para="IT Context ontwerp alles wat je in gedachten hebt."/>
      <Features/>
    </SectionB>
  )
}
const SectionB = styled.section`
  padding: 4.5rem 1.4rem;
  max-width: 1280px;
  margin: 0 auto;
  scroll-margin-top: 8rem;
` 
export default React.forwardRef(Carousel)