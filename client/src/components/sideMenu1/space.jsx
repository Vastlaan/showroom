import React from 'react'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'

export default function space({setIsMenuDisplayed}) {
  return (
    <Space  onClick={()=>{
          setIsMenuDisplayed(false)
        }}>
      
    </Space>
  )
}

const Space = styled.div`
  grid-area: space;
  background-color: rgba(0,0,0,.3);
  display: block;
  cursor: pointer;

`