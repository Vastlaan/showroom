import React from 'react'
import styled from 'styled-components'
import Navigation2 from '../navigation2'
import Header3 from '../header3'
import Intersection1 from '../intersection1'
import {fonts, respond} from '../../styles'

export default function Example2() {
  return (
    <Container>
      <HeaderContainer>
        <Navigation2/>
        <Header3/>
      </HeaderContainer>
      <Intersection1/>
      
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
`
const HeaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${p=>p.theme.primary2};
  ${()=>respond('l', 'max-height: 100vh;')}
`
