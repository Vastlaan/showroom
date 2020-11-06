import React from 'react'
import styled from 'styled-components'
import Navigation2 from '../navigation2'
import Header3 from '../header3'
import Intersection1 from '../intersection1'
import ShortSection1 from '../shortSection1'
import Intersection2 from '../intersection2'
import Rank from '../sectionRank'
import Footer from '../footer1'
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
        <Intersection2/>
      </CustomLayout>
      <Rank/>
      <Footer/>
      
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`
const HeaderContainer = styled.section`
  width: 100%;
  background-color: ${p=>p.theme.primary2};
`
const CustomLayout= styled.section`
  width: 100%;
  ${() => respond("xl", "width: 1366px; margin: 0 auto; padding: 0;")}
  ${() => respond("tv", "width: 2560px; margin: 0 auto; padding: 0;")}
`
