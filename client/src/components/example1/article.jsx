import React from 'react'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'

export default function Artc() {
  return (
    <Article>
        <h5>Contenful thinking</h5>
        <h3>It is all about Typography</h3>
        <span>story by Michal Antczak</span>
        <TextMarginLarge>I'm baby af truffaut kitsch paleo, intelligentsia prism palo santo cornhole ethical schlitz listicle chartreuse stumptown chia. 
          Cloud bread subway tile poutine brooklyn ramps, letterpress venmo mlkshk knausgaard franzen. 
          Vinyl messenger bag squid marfa chartreuse portland vegan skateboard activated charcoal pour-over meh 8-bit paleo tacos crucifix. 
          Squid twee whatever, snackwave hell of affogato polaroid tumeric lumbersexual. 
          Austin 90's asymmetrical venmo, kale chips shabby chic cornhole subway tile lumbersexual thundercats lo-fi offal af skateboard. 
          Humblebrag master cleanse fixie lyft, mustache dreamcatcher la croix distillery cloud bread migas church-key. 
          Enamel pin viral small batch, mixtape blue bottle live-edge messenger bag hoodie PBR&B trust fund jean shorts heirloom.
        </TextMarginLarge>
      </Article>
  )
}

const Article = styled.article`

  padding: 2rem;

  ${()=>respond('m','margin: 10rem calc(100% / 12); padding: 2rem 0;')}

  h1{
    font-family: ${fonts.heading1};
    font-size: 11rem;
    line-height: 1.8;
    margin: 2rem 0rem;
    color: #202020;
  }
  h2{
    font-family: ${fonts.heading1};
    font-size: 7rem;
    line-height: 1.4;
    margin: 1rem 0rem;
    color: #343434;
    
    

  }
  h3{
    font-family: ${fonts.heading1};
    font-size: 4rem;
    line-height: 1.5;
    margin: 1rem 2rem;
    color: #4F4F4F;
    position:relative;

    &:after{
      content: "";
      width: 1rem;    // margin - 1rem for space between text and line
      height: 6rem;  // font-size * line-height
      background-color: ${p=>p.theme.primary};
      position: absolute;
      top:0;
      left: -2rem;
    }
  }
  h4{
    font-family: ${fonts.heading1};
    font-size: 2.6rem;
    line-height: 1.4;
    color: #4F4F4F;
    position:relative;
    margin: 2rem 0;

    &:after{
      content: "";
      width: 4rem;    // 
      height: 1px;  // font-size * line-height
      background-color: #6D6D6D;
      position: absolute;
      bottom: -.5rem;
      left: 0;
    }
  }
  h5{
    font-family: ${fonts.heading1};
    font-size: 1.6rem;
    line-height: 1.3;
    letter-spacing: .2rem;
    color: ${p=>p.theme.primary};
    margin: 2rem 0rem;
  }
  h6{
    font-family: ${fonts.heading1};
    font-size: 1.6rem;
    line-height: 1.2;
    color: #6D6D6D;
    font-style: italic;
  }
  p{
    font-family: ${fonts.para1};
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #4F4F4F;
    max-width: 60rem;

  }
  span{
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    line-height: 1.2;
    color: #6D6D6D;
    margin: 0;
    text-decoration:underline;
  }
`

const TextMarginLarge = styled.p`
      margin: 3rem 0;
`
