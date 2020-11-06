import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Navigation2 from '../navigation2'
import Header3 from '../header3'
import Intersection1 from '../intersection1'
import ShortSection1 from '../shortSection1'
import {fonts, respond} from '../../styles'

export default function Example2() {
  return (
    <Container>
      <HeaderContainer>
        <Navigation2/>
        <Header3/>
      </HeaderContainer>
      <CustomLayout>
        <Intersection1/>
        <ShortSection1/>
      </CustomLayout>
      
      
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`
const HeaderContainer = styled.section`
  width: 100%;
  background-color: ${p=>p.theme.primary2};
  ${()=>respond('l', 'max-height: 100vh;')}
`
const CustomLayout= styled(Layout)`
  padding-top: 0;
`
