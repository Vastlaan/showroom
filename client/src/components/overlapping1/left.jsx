import React from 'react'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'

export default function Left({data}) {
  return (
    <Container>
      <Content>
        <Header color={data.color}>
          <h1>{data.headerBold1}</h1>
          <h3>{data.headerRegular1}</h3>
          <h1>{data.headerBold2}</h1>
          <h3>{data.headerRegular2}</h3>
        </Header>
        <p>{data.paragraph}</p>
      </Content>
      <Image  color={data.color}>
        <img src={data.img} alt={data.img}/>
      </Image>
    </Container>
  )
}

const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  margin: 1rem 0;

  ${()=>respond('l','grid-template-columns: 1fr 1fr; grid-column-gap: 2rem;')}
`
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;
  ${()=>respond('l','padding:0;')}
  p{
    margin-top:5rem;
    width:90%;
    font-family: ${fonts.para3};
    color: ${p=>p.theme.grey3};
    font-size: 1.9rem;
    line-height: 1.4;
    text-align: center;
    ${()=>respond('l','width:70%; margin-top:2rem; text-align: left;')}
  }

`
const Header = styled.div`
  width:90%;
  ${()=>respond('l','width:70%;')}
  h1{
    color: ${p=>p.color};
    font-family: ${fonts.heading3};
    font-size: 4.7rem;
    font-weight: 900;
    line-height: 1;
    text-align: center;
    ${()=>respond('l',' text-align: left;')}
  }
  h3{
    color: ${p=>p.theme.grey2};
    font-family: ${fonts.heading3};
    font-size: 2.3rem;
    font-weight: 900;
    line-height: 1;
    text-align: center;
    ${()=>respond('l',' text-align: left;')}
  }
`
const Image = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: calc(50rem - 1rem);
  overflow:hidden;
  border-radius: 5px;
  box-shadow: 0rem -2rem 5rem rgba(0,0,0,.1);
  position: relative;
  z-index: 1;

  ${()=>respond('l','box-shadow: -1rem 0 1rem rgba(0,0,0,.3);')}

  &::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    background-color: ${p=>p.color};
    opacity: .2;
    z-index: 3;
  }

  img{
    min-width: 100%;
    height:100%;
    object-fit: cover;
    object-position: center;
    z-index: 2;
  }
`
