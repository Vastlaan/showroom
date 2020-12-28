import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {data} from '../../../data/footer1'
import {fonts, respond} from '../../../styles'


export default function Footer1() {
  return (
    <Container>
      <Info>
        <div>
          <Logo>
            <Link to='/'>
              <h1>Max</h1>
              <h2>Bouw</h2>
            </Link>
          </Logo>
          <Para>{data.header}</Para>
        </div>
       
        
      </Info>
      <Lists>
        {data.sections.map(section=>{

          return(
          <div key={`section-${section.id}`}>
            <h3>{section.header}</h3>
          {section.links.map((link,i)=>{
            return (
              <Link to='/' key={`${link}-${i}-${Math.random(100)}`}>{link}</Link>
            )
          })}
          </div>
          
        )})}   
      </Lists>
       <Copy>
          <Para>
            &copy; {data.copyright}
          </Para>
      </Copy>
    </Container>
  )
}
const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2.3rem;
  padding: 4.7rem;
`
const Info = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${()=>respond('l','grid-column: 1/3; grid-row: 1/2; flex-direction: column;')}
`
const Para = styled.p`
  font-family: ${fonts.heading4};
  font-size: 1.9rem;
  font-weight: 300;
  line-height: 1.4;
  color: ${p=>p.theme.grey4};

`

const Logo = styled.div`
  font-family: ${fonts.heading4};
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
    color: ${p=>p.theme.grey4};
    letter-spacing: -.2rem;
    text-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }
`
const Lists = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.9rem;

  ${()=>respond('l','grid-column: 3/-1; grid-row: 1/2;')}
  
  div{
    display: flex;
    flex-direction: column;

    h3{
      font-weight: 600;
      font-family: ${fonts.heading4};
      color: ${p=>p.theme.grey2};
      line-height: 1.3;
      font-size: 1.9rem;
      margin-bottom: .9rem;
      
    }

    a{
      margin-top: .5rem;
      text-decoration: none;
      font-weight: 300;
      font-family: ${fonts.heading4};
      color: ${p=>p.theme.grey3};
      line-height: 1.3;
      font-size: 1.9rem;
      text-transform: capitalize;
    }
  }
`

const Copy = styled.div`
    grid-column: 1/-1;
`

