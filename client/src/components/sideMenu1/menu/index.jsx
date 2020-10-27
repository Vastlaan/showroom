import React from 'react'
import styled from 'styled-components'
import {fonts} from '../../../styles'
import Sector from './sector'
// import props
import {MenuProps as props} from '../../../data/sideMenu.js'

export default function menu() {

  return (
    <Menu>
      <Main>
        <HeaderMain>
          <h3>
            {props.header}
          </h3>
          <h6>
            {props.subheader}
          </h6>
        </HeaderMain>
        {
          props.categories.map(cat=>{
            return(
              <Sector key={`${cat.header}-${cat.id}`} cat={cat}/>
            )
          })
        }
      </Main>
    </Menu>
  )
}
const Menu = styled.aside`
  width: 100%;
  height:100%;
  grid-area: menu;
  display: flex;
  flex-direction: column;
  background-color: ${p=>p.theme.grey6};

`
const Main = styled.nav`
  margin-top: 5rem;
  background-color: ${p=>p.theme.grey7};
  flex: 1;
`
const HeaderMain= styled.div`
  
  padding: 2.3rem 2.7rem;
  border-bottom: 1px solid ${p=>p.theme.grey6};
  h3{
    font-family: ${fonts.heading1};
    font-size: 3.3rem;
    color: ${p=>p.theme.grey2};
    line-height: 1;
  }

  h6{
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    color: ${p=>p.theme.grey5};
    font-weight: 300;
    line-height: 1;
  }
  
`


