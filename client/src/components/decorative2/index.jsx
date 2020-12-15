import React from 'react'
import styled from 'styled-components'
import {respond} from '../../styles'

export default function Decorative1({style, color, gap}) {

  

  const renderContent = ()=>{
    let amount = 100
    let arr =[]
    while(amount <=0){
      if(amount%2===0){
        arr.push(<div></div>)
      }else{
        arr.push(null)
      }
      amount--
    }
    return arr
  }

  return (
    <Net color={color} gap={gap} style={{...style}}>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
       <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
       <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
       <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      <span></span>
      <div></div>
      
    </Net>
  )
}

const Net = styled.div`
  display: none;
  grid-template-columns: repeat(10, 5px);
  grid-template-rows: repeat(10, 5px);
  grid-gap: ${p=>p.gap?p.gap:'5px'};

  ${()=>respond('xl','display: grid;')}

  div{
    width: 5px;
    height: 5px;
    border: 1px solid ${p=>p.color?p.color:p.theme.secondary3};
    transform: rotate(45deg);
  }
`
