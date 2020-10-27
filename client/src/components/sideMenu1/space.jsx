import React from 'react'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'

export default function space({setIsMenuDisplayed}) {
  return (
    <Space  onClick={()=>{
          console.log(false)
          setIsMenuDisplayed(false)
        }}>
      
    </Space>
  )
}

const Space = styled.div`
  grid-area: space;
  background-color: rgba(0,0,0,.6);
  display: block;
  cursor: pointer;

`