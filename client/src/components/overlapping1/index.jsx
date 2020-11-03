import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {data} from '../../data/overlapping'
import Left from './left'
import Right from './right'

export default function Overlapping1() {

  const [r, setR] = useState(false)

  useEffect(()=>{
    function rerender(){
      console.log(r)
      return setR(prevState=>!prevState)
    }
    window.addEventListener('resize', rerender)
    return ()=>window.removeEventListener('resize', rerender)
  },[r])
  
  return (
    <Container>
      {data.map((d,i)=>{
        console.log(window.innerWidth)
        if(i%2!==0 && window.innerWidth > 992){
          return <Right key={`overlapping-1-${d.id}`}  data={{...d, color: '#BC602D'}}/>
        }
        return <Left key={`overlapping-1-${d.id}`} data={{...d, color: '#2D89BC'} }/>
        
      })}
    </Container>
  )
}
const Container = styled.section`

`
