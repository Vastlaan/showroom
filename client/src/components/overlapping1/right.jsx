import React from 'react'
import styled from 'styled-components'
import {fonts} from '../../styles'

export default function Right({data}) {
  return (
    <Container>
      <Image color={data.color}>
        <img src={data.img} alt={data.img}/>
      </Image>
      <Content>
        <Header color={data.color}>
          <h1>{data.headerBold1}</h1>
          <h3>{data.headerRegular1}</h3>
          <h1>{data.headerBold2}</h1>
          <h3>{data.headerRegular2}</h3>
        </Header>
        <p>{data.paragraph}</p>
      </Content>
      
    </Container>
  )
}

const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  margin: 1rem 0;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

  p{
    margin-top:2rem;
    width:60%;
    font-family: ${fonts.para3};
    color: ${p=>p.theme.grey3};
    font-size: 1.6rem;
    line-height: 1.4;
  }

`
const Header = styled.div`
  width:60%;
  h1{
    color: ${p=>p.color};
    font-family: ${fonts.heading3};
    font-size: 4.2rem;
    font-weight: 900;
    line-height: 1;
  }
  h3{
    color: ${p=>p.theme.grey2};
    font-family: ${fonts.heading3};
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
  }
`
const Image = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: calc(50rem - 1rem);
  overflow:hidden;
  border-radius: 5px;
  box-shadow: 1rem 0 1rem rgba(0,0,0,.3);
  position: relative;

  &::after{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    background-color: ${p=>p.color};
    opacity: .2;
  }

  img{
    min-width: 100%;
    height:100%;
    object-fit: cover;
    object-position: center;
  }
`
