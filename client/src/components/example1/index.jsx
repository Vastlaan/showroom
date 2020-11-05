import React from 'react'
import styled from 'styled-components'
import Nav1 from '../navigation1'
import SideMenu1 from '../sideMenu1'
import Layout from '../layout'
import Article from './article'
import Header1 from '../header1'
import Overlapping from '../overlapping1'
import {respond} from '../../styles'

export default function example1() {
  return (
    <>
      <Nav1 />
      <SideMenu1 />
      <Layout>
        <Header1/>
        <ArticlesContainer>
          <Article />
          <Article />
        </ArticlesContainer>
        
        <Overlapping/>
      </Layout>
    </>
      
  )
}
const ArticlesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;

  ${()=>respond('xl','grid-template-columns: 1fr 1fr; align-content: start;')}
`
