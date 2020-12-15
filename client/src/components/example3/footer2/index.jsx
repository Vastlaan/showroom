import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {data} from '../../../data/footer2'
import {fonts, respond, Content} from '../../../styles'
import {FaMapMarkedAlt, FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa'

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
            <Address>
              <div>
                <FaMapMarkedAlt/>
              </div>
              <div>
                <p>{data.address.street} {data.address.nr}</p>
                <p>{data.address.city}</p> 
                <p>{data.address.land}</p>
              </div>
             </Address>
             <Address>
               <div>
                <FaPhoneAlt/>
                </div>
                <div><p>{data.phone}</p></div>
                
             </Address>
              <Address>
                <div>
                  <FaEnvelopeOpenText/>
                </div>
                <div><p>{data.email}</p></div>
                
              </Address>
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
                      <Link key={`${link}-${i}-${Math.random(100)}`} to={`/template-1`}>{link}</Link>
                    )
                  })}
                </div>
              )
            })}
          </Links>
          <h6>&copy; {new Date().getFullYear()} {data.copyright}</h6>
        </Bulk>
        
      </Content>
    </Footer>
  )
}

const Footer = styled.footer`
  padding: 2.7rem .9rem;
  font-family: ${fonts.roboto};
  background-color: ${p=>p.theme.secondary3};

  ${()=>respond('l','padding: 4.7rem;')}
`
const Bulk = styled.div`
  display:flex;
  flex-direction: column;
  ${()=>respond('l','flex-direction:row; flex-wrap: wrap;')}

  h6{
    padding: 2.7rem 1.9rem 0 1.9rem;
    border-top: 1px solid ${p=>p.theme.grey7};
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    line-height: 1;
    letter-spacing: .2rem;
    font-weight: 300;
    color: ${p=>p.theme.grey7};
    
    ${()=>respond('l','text-align: center;')}
  }

`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.7rem;
  flex: 1;
  ${()=>respond('l','align-items: flex-start;')}


  h3{
    font-size: 3.3rem;
    line-height: 1;
    color: ${p=>p.theme.grey7};

  }
  h4{
    font-size: 1.9rem;
    line-height: 1;
    font-weight: 400;
    color: ${p=>p.theme.grey7};
    margin-bottom: 2.7rem;
  }  
`

const Address = styled.div`
    margin: .9rem 0;
    display: grid;
    grid-template-columns: 5rem 1fr;
    padding: .9rem;
    align-items: center;
    border: 1px solid ${p=>p.theme.grey7};
    width: 35rem;

    p{
      font-size: 2.3rem;
      line-height: 1.3;
      color: ${p=>p.theme.grey7};
      font-weight: 600;
      margin: .9rem 0;
      ${()=>respond('l','font-size: 1.9rem;')}
      
    }
    div{
      text-align: center;
      svg{
        
        font-size: 2.7rem;
        color: snow;
      }
    }
    
`
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.9rem;
  padding: 2.7rem;  
  justify-items: center;
  flex: 1;
  ${()=>respond('xxl','grid-template-columns: repeat(4, 1fr);')}
  ${()=>respond('xl','grid-template-columns: repeat(3, 1fr);')}
  
  div{
    display: flex;
    flex-direction: column;
    margin: 1.9rem 0;

    ${()=>respond('l','margin: 2.7rem;')}

    h3{
      font-weight: 600;
      font-family: ${fonts.heading3};
      color: ${p=>p.theme.grey8};
      line-height: 1.3;
      font-size: 2.7rem;
      margin-bottom: .9rem;
      ${()=>respond('l','font-size: 1.9rem;')}
      
    }

    a{
      margin-top: .5rem;
      text-decoration: none;
      font-weight: 300;
      font-family: ${fonts.heading3};
      color: ${p=>p.theme.grey7};
      line-height: 1.3;
      font-size: 2.3rem;
      text-transform: capitalize;
      transition: all .3s;
      ${()=>respond('l','font-size: 1.9rem;')}

      &:hover{
        color: ${p=>p.theme.grey6};
      }
    }
  }
`