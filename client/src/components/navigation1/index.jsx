import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {respond, fonts} from '../../styles'

export default function Navigation1() {

  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false)

  useEffect(()=>{
    function changeBackground(){
      if(window.scrollY > 50){
        setIsBackgroundWhite(true)
      }else{
        setIsBackgroundWhite(false)
      }
    }

    window.addEventListener('scroll',changeBackground)

    return ()=>window.removeEventListener('scroll', changeBackground)
  })

  

  return (
    <Container isBackgroundWhite={isBackgroundWhite}>
      <Brand>
        <Link to='/'>
          My Company Name
        </Link>
      </Brand>
      <Buttons>
        <Link to='/article-1'><li>articles</li></Link>
        <Link to='/example-1'><li>example</li></Link>
        <Link to='/nav-1'><li>navigation</li></Link>
        <li>&nbsp;</li>
      </Buttons>
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: ${p=>p.isBackgroundWhite?'rgba(255,255,255,1)':'rgba(255,255,255,.6)'};
  align-content: center;

  // below media query is optional
  ${()=>respond('xl','padding: 1rem calc(((100vw - 1366px) / 2) + 1rem);')}
  ${() => respond("tv", "padding: 1rem calc(((100vw - 2561px) / 2) + 1rem);")}


`
const Brand = styled.div`

  grid-column: 1/8;
  ${()=>respond('l','grid-column: 1/4;')}

  a{
    text-decoration: none;
    color: ${p=>p.theme.secondary};
    font-size: 3rem;
    line-height:1;
    font-family: ${fonts.heading1};
  }

`

const Buttons = styled.ul`
  list-style: none;
  grid-column: 8/-1;
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  
  ${()=>respond('l','display:flex;')}

  a{
    text-decoration: none;
    li{
      font-size: 2.2rem;
      line-height: 1;
      font-family: ${fonts.heading1};
      color: ${p=>p.theme.secondary};
    }
  }

  // optional for fixed menu button
  &::last-child{
    width: 5rem;
  }

`


