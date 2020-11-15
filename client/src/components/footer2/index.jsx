import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {data} from '../../data/footer2'
import {fonts, respond, Content} from '../../styles'

export default function Footer2() {
  return (
    <Footer>
      <Content>
        <Bulk>
          <Info>
            <h3>
              {data.name}
            </h3>
            <h4>
              {data.header}
            </h4>
            <div>
              <p>{data.address.street} {data.address.nr}, {data.address.city}, {data.address.land}</p>
              <p>Telefoon: {data.phone}</p>
              <p>E-mailadres: {data.email}</p>
            </div>
            <h6>&copy; {new Date().getFullYear()} {data.copyright}</h6>
          </Info>
          <Links>
            {data.sections.map((section,i)=>{
              return(
                <div key={`${section}-${i*Math.random(100)}`}>
                  <h3>
                    {section.header}
                  </h3>
                  {section.links.map((link,i)=>{
                    return(
                      <Link key={`${link}-${i}-${Math.random(100)}`} to={`/${link}`}>{link}</Link>
                    )
                  })}
                </div>
              )
            })}
          </Links>
        </Bulk>
        
      </Content>
    </Footer>
  )
}

const Footer = styled.footer`
  margin-top: 4.7rem;
  padding: 2.7rem .9rem;
  font-family: ${fonts.roboto};
  background-color: ${p=>p.theme.secondary3};

  ${()=>respond('l','padding: 4.7rem;')}
`
const Bulk = styled.div`
  display:flex;
  flex-direction: column-reverse;
  ${()=>respond('l','flex-direction:row;')}

`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.7rem;
  flex: 1;


  h3{
    font-size: 3.3rem;
    line-height: 1;
    color: white;

  }
  h4{
    font-size: 1.9rem;
    line-height: 1;
    font-weight: 400;
    color: ${p=>p.theme.grey7};
  }

  div{
    margin: 2.7rem 0;
    p{
      font-size: 1.6rem;
      line-height: 1.3;
      color: ${p=>p.theme.grey7};
      font-weight: 300;
      svg{

      }
    }
  }
  h6{
    font-size: 1.1rem;
    line-height: 1;
    letter-spacing: .2rem;
    font-weight: 300;
    color: ${p=>p.theme.grey7};
  }
  
`
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.9rem;
  padding: 2.7rem;

  ${()=>respond('l','grid-template-columns: repeat(4, 1fr);')}
  
  div{
    display: flex;
    flex-direction: column;
    margin: 0rem;

    ${()=>respond('l','margin: 2.7rem;')}

    h3{
      font-weight: 600;
      font-family: ${fonts.heading3};
      color: ${p=>p.theme.grey8};
      line-height: 1.3;
      font-size: 1.9rem;
      margin-bottom: .9rem;
      
    }

    a{
      margin-top: .5rem;
      text-decoration: none;
      font-weight: 300;
      font-family: ${fonts.heading3};
      color: ${p=>p.theme.grey7};
      line-height: 1.3;
      font-size: 1.9rem;
      text-transform: capitalize;
      transition: all .3s;

      &:hover{
        color: ${p=>p.theme.grey6};
      }
    }
  }
`