import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {fonts} from '../../../styles'
import {MdExpandMore, MdChevronRight} from 'react-icons/md'

/* 
  The icons from real database will be delivered as an image (svg or png), they could require additional handling by rendering
*/

export default function sector({cat}) {

  const expandItem = (ref) =>{
    let styleRef = window.getComputedStyle(ref.current)
    if(styleRef.display==='none'){
      ref.current.style.display='block'
    }else{
      ref.current.style.display='none'
    }
    

  }

  return (
    <Sector key={`${cat.header}-${cat.id}`} cat={cat}>
      {cat.header&&<Header><h3>{cat.header}</h3></Header>}
      {cat.items.map(item=>{

        if(!item.sub){
          return(
            <Link to={item.link} key={`${item.name}-${item.id}`} style={{textDecoration:'none'}} >
              <Item >
                <Icon>
                  {item.icon}
                </Icon>
                <Para>
                  <p>
                    {item.name}
                  </p>
                </Para>
              </Item>
            </Link>
          )
        }else{

          const sub = useRef()

          return(
            <div key={`${item.name}-${item.id}`}>
              <Item onClick={()=>expandItem(sub)}>
                <Icon>
                  {item.icon}
                </Icon>
                <Para>
                  <p>
                    {item.name}
                  </p>
                  <Icon><MdExpandMore/></Icon>
                </Para>
              </Item>
              <Sub ref={sub}>
                {item.sub.map(s=>{
                  return(
                      <Link to={s.link} key={`${s.name}-${s.id}`} style={{textDecoration:'none'}} >
                      <SubItem >
                        <Icon>
                          <MdChevronRight/>
                        </Icon>
                        <Para>
                          <p>
                            {s.name}
                          </p>
                        </Para>
                      </SubItem>
                    </Link>
                  )
                })}
              </Sub>
            </div>
            
          )
          
        }
        
      })}
    </Sector>
  )
}
const Sector= styled.ul`
  width: 100%;
  padding: 0 1.7rem;
  border-bottom: 1px solid ${p=>p.theme.grey6};

`
const Header = styled.div`

  padding: 2.3rem 1rem; 

  h3{
    font-family: ${fonts.para1};
    font-size: 2.3rem;
    color: ${p=>p.theme.grey4};
    font-weight: 300;
    line-height: 1;
  }
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  align-content: center;
  margin: 2.3rem auto;
  transition: all .3s;
  color: ${p=>p.theme.secondary};
  cursor: pointer;
  border-radius: 3px;

  &:hover{
    color: ${p=>p.theme.grey7};
    background-color:${p=>p.theme.secondaryDark};
  }

 
`
const Icon = styled.div`
  padding: 1rem;
  display:flex;
  justify-content: center;
  align-items: center;


  svg{
    font-size: 2.3rem;
  }
`
const Para = styled.div`
  display: flex;
  align-itmes: center;

   p{
    font-size: 1.9rem;
    font-family: ${fonts.heading1};
    text-transform: uppercase;
    display:flex;
    align-items: center;
    line-height: 1;

  }
`

const Sub =styled.div`
  display: none;
  transition: all .3s;
`

const SubItem = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  align-content: center;
  margin: 2.3rem auto;
  transition: all .2s;
  color: ${p=>p.theme.secondary};
  cursor: pointer;
  border-radius: 3px;

  &:hover{
    transform: translateX(5px);
  }
`
