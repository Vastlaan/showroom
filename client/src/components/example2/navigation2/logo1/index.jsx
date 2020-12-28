import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {respond, fonts} from '../../../../styles'

export default function Logo1() {
  return (
    <Logo>
        <Link to='/'>
          <h1>Max</h1>
          <h2>Bouw</h2>
        </Link>
    </Logo>
  )
}
const Logo = styled.div`
  font-family: ${fonts.heading4};
  margin-right: 4.7rem;

  ${()=>respond('xl','flex: 1; margin-right: 0rem;')}

  
  a{
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  h1{
    font-weight: 900;
    color: ${p=>p.theme.secondary2};
    line-height: 1;
    font-size: 4.7rem;
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
  h2{
    font-weight: 300;
    line-height: 1;
    font-size: 4.7rem;
    color: ${p=>p.theme.grey7};
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
`