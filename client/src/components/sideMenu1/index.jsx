import React from 'react'
import Layout from '../layout'
import styled from 'styled-components'
import { respond} from '../../styles'
// components
import Menu from './menu'
import Space from './space'

/*
  This component is created to be embed inside Layout component. 
  The Layout wrapper here is only for test puropses and should be removed.
*/

export default function sideMenu1({isMenuDisplayed, setIsMenuDisplayed}) {
  return (
    <Layout>
      <Container isMenuDisplayed={isMenuDisplayed}>
        <Menu/>
        <Space setIsMenuDisplayed={setIsMenuDisplayed}/>
      </Container>
      
    </Layout>
  )
}

const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${p=>p.isMenuDisplayed?'0':'-100%'};
  width: 100%;
  overflow-y:scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    'space'
    'menu';
  grid-template-rows: 30% 1fr;
  z-index: 99;
  transition: all .3s;

  ${()=>respond('m',`
    grid-template-columns: 30rem 1fr;
    grid-template-areas: "menu space";
    grid-template-rows:1fr;
  `)}
`


