import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {fonts, respond, ButtonT4} from '../../../styles'

export default function Navigation({data}) {

  const [active, setActive] = useState("")

  return (
    <Container>
      <Logo><span>T</span>4</Logo>
      <List>
        {data.map(l=>{
          return <Item key={`link-${l.id}-${l.name}`} onMouseEnter={()=>setActive(l.id)} onMouseLeave={()=>setActive("")} >
              <Link to={l.url}>
                <Li>
                  {l.name}
                  
                </Li>
                
              </Link>
              {l.subs.length>0 && <Sublist  id={l.id} active={active}>
                    {l.subs.map(s=>{
                      return <Link key={`sub-${s.id}-${s.name}`} to={s.url}><li >{s.name}</li></Link>
                    })}
                  </Sublist>}
            </Item> 
        })}
      </List>
      <ButtonT4 onClick={()=>window.location.href='https://itcontext.nl/contact'}>
        Bestellen
      </ButtonT4>
    </Container>
  )
}

const Container = styled.nav`
  width: 100%;
  display: flex;
  padding: 0 1.4rem;
  background-image: linear-gradient(to right, #F7F9F6,#F7F9F6 30%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: ${fonts.roboto};
  font-size: 4rem;
  font-weight: 300;
  //text-shadow: .2rem .2rem .1rem rgba(0,0,0,.3);

  span{
    color: ${p=>p.theme.primary};
    font-weight: 600;
  }
`
const Item = styled.div`
  height: 100%;
  position: relative;
  
  a{
    height: 100%;
  }
`
const Li = styled.li`
    position: relative;
    background-color: transparent;
    z-index: 99;
    padding: 0 3.3rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: ${fonts.roboto};
    font-size: 1.5rem;
    color: ${p=>p.theme.grey1};
    transition: all .3s;

    &:hover{
      background-color: white;
      
    }
`
const Sublist = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  opacity: ${p=>p.active===p.id?'1':'0'};
  left: 0;
  background-color: white;
  padding: 1.4rem;
  width: ${p=>p.active===p.id?'20rem':'0'};
  z-index: 99;
  transition: opacity .3s, top .3s, color .3s, width .3s;
  box-shadow: 0 1rem 1rem rgba(0,0,0,.4);


  li{
    padding: 0;
    margin: 1.4rem 0;
    font-family: ${fonts.roboto};
    font-size: 1.5rem;
    color: ${p=>p.theme.grey3};
    display: block;
    transition: all .3s;
    text-decoration: underline;

    &:hover{
      transform: translateX(5px);
      
    }
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin:0 1.4rem 0 auto;
`



// const links = [
//   {
//     id: "link-1",
//     name: "Blog",
//     subs: [
//       {
//         id: "blog-cat-1",
//         name: "Adventure",
//         url: "/template-4"
//       },
//       {
//         id: "blog-cat-2",
//         name: "Politic",
//         url: "/template-4"
//       },
//     ],
//     url: '/template-4'
//   },
//   {
//     id: "link-2",
//     name: "Shop",
//     url: '/template-4',
//     subs: [
//       {
//         id: "blog-cat-1",
//         name: "Levering",
//         url: "/template-4"
//       },
//       {
//         id: "blog-cat-2",
//         name: "Betaling",
//         url: "/template-4"
//       },
//       {
//         id: "blog-cat-3",
//         name: "Voorwaarden",
//         url: "/template-4"
//       },
//     ],
//   },
//   {
//     id: "link-3",
//     name: "Products",
//     url: '/template-4'
//   }
// ]