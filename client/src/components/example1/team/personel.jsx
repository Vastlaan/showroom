import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Heading from '../utils/heading'
import {respond, fonts} from '../../../styles'
import {FaTwitterSquare, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'

export default function Personel({data}) {
  return (
    <Container>
      {data.map(person=>{
        return(
          <Person key={person.id}>
            <Image>
              <img src={person.img} alt="person"/>
            </Image>
            <h4>{person.name}</h4>
            <h6>{person.function}</h6>
            <Line/>
            <p>{person.description}</p>
            <Social>
              {person.twitter && <Link to={person.twitter}><FaTwitterSquare/></Link>}
              {person.facebook && <Link to={person.facebook}><FaFacebookSquare/></Link>}
              {person.linkedin && <Link to={person.linkedin}><FaLinkedin/></Link>}
            </Social>
          </Person>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${()=>respond('m','flex-direction: row; justify-content: center;')}

`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${p=>p.theme.grey1};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
  width: 20rem;
  height: 20rem;
  transition: all .3s;
  margin-bottom: 2.7rem;

  img{
    width: 100%;
  }
`
const Social = styled.div`
  display: flex;
  justify-content: center;

  a{
    color: ${p=>p.theme.grey2};

    &:hover{
      color: blue;
    }

    svg{
      font-size: 1.9rem;
      margin-right: 1.4rem;
    }
  }
`
const Line = styled.div`
  margin: 1.4rem auto;
  width: 30%;
  height: 2px;
  background-color: ${p=>p.theme.grey4};
  transition: all .3s;
`

const Person = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin: 3.6rem;
  font-family: ${fonts.heading1};

  h4{
    font-size: 2.7rem;
    font-weight: 300;
  }
  h6{
    font-size: 1.4rem;
    font-weight: 300;
  }
  p{
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.4rem;
  }

  &:hover{

    ${Image}{
      box-shadow: 0 0 2rem rgba(0,0,0,.6);
    }
    ${Line}{
      width: 100%;
    }
  }
`