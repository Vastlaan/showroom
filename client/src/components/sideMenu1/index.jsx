import React, {useContext} from 'react'
import styled from 'styled-components'
import { respond} from '../../styles'
import {Context} from '../../store'
// components
import Menu from './menu'
import Space from './space'

/*
  This component is created to be embed inside Layout component. 
  The Layout wrapper here is only for test puropses and should be removed.
*/

export default function SideMenu1() {

  const {store, dispatch} = useContext(Context)
  const setIsMenuDisplayed = () => dispatch({type: 'switchMenu', payload: undefined})
  

  return (
      <Container isMenuDisplayed={store.isMenuOpen}>
        <Menu setIsMenuDisplayed={setIsMenuDisplayed} isMenuDisplayed={store.isMenuOpen}/>
        <Space setIsMenuDisplayed={setIsMenuDisplayed}/>
      </Container>
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
  scrollbar-width: none;
  &::-webkit-scrollbar{
    width: 0px;
  }

  ${()=>respond('m',`
    grid-template-columns: 30rem 1fr;
    grid-template-areas: "menu space";
    grid-template-rows:1fr;
  `)}
`


