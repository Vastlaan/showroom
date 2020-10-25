/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Layout from '../layout'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'
import Image from '../../img/article-2.jpg'

export default function () {
  return (
    <Layout>
      <Article>
        <h6>Music</h6>
        <ImageBox>
          <img src={Image} alt="cd cover"/>
        </ImageBox>
        <span>fot. Wikipedia</span>
        <h1>Healing Angel</h1>
        <h5>Healing Angel is the first (and thus far, only) recording released by Irish actress and Touched by an Angel star Roma Downey. It was issued in 1999 on RCA Records. The album features Downey reading ancient Celtic texts, while Phil Coulter (who also produced the record), plays the music.</h5>
        <SectionPara>
          <Side>
            <ParaSide>
              Phil Coulter is the first (and thus far, only) recording released by Irish
            </ParaSide>
            <ParaSide>
              Willim is the first recording released by Irish
            </ParaSide>
          </Side>
          <div>
            <ParaMain>The album features Downey reading ancient Celtic texts, while Phil Coulter (who also produced the record), plays the music. It peaked very high on the New Age chart, reaching number 5. </ParaMain>
            <ParaMain>Downey reading ancient Celtic texts, while Phil Coulter is the first (and thus far, only) recording released by Irish actress and Touched byys the music. It peaked very high on the New Age chart. To date, it has sold in excess  copies.</ParaMain>
            <ParaMain>To date, it has sold in excess of 42,000 copies. The album contains vocals from the Irish folk singer Aoife Ní Fhearraigh.</ParaMain>
          </div>
        </SectionPara>
      </Article>
      <Article>
        <h6>Books</h6>
        <h1>Naked Lunch</h1>
        <span>by William Boroughs</span>
        <h5>Naked Lunch (sometimes The Naked Lunch) is a 1959 novel by American writer William S. Burroughs. The book is structured as a series of loosely connected vignettes. Burroughs stated that the chapters are intended to be read in any order.[1] The reader follows the narration of junkie William Lee, who takes on various aliases, from the U.S. to Mexico, eventually to Tangier and the dreamlike Interzone.</h5>
        <SectionPara>
          <Side>
            <ParaSide>
               German opioid with the brand name Eukodol (oxycodone)
            </ParaSide>
            <ParaSide>
              Willim is the first recording released by Irish
            </ParaSide>
          </Side>
          <div>
            <ParaMain>The vignettes (which Burroughs called "routines") are drawn from Burroughs' own experiences in these places and his addiction to drugs: heroin, morphine and, while in Tangier, majoun (a strong hashish confection), as well as a German opioid with the brand name Eukodol (oxycodone), of which he wrote frequently. </ParaMain>
            <ParaMain>The book was originally published with the title The Naked Lunch in Paris in July 1959 by Olympia Press. Because of US obscenity laws,[4] a complete American edition (by Grove Press) did not follow until 1962.</ParaMain>
          </div>
        </SectionPara>
      </Article>
      <Article>
        <h1>This</h1>
        <h2>Typography is created</h2>
        <h3>With Minor 1.2 ratio scale</h3>
        <h4>And use Gilda Display for headings</h4>
        <h5>Montserrat sans-serif for paragraphs</h5>
        <h6>Including captions, colors #9C640C (kind of gold)</h6>
        <ParaMain>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim fuga fugit pariatur iure hic ut iusto suscipit est a! Tenetur iusto, quaerat accusamus quo amet debitis doloremque nihil dicta.</ParaMain>
        <span>some less important text</span>
      </Article>
    </Layout>
  )
}


const Article = styled.article`

  padding: 2rem;

  h1{
    font-family: ${fonts.heading2};
    font-size: 4rem;
    line-height: 1.8;
    margin: 2rem 0rem;
    color: #202020;
  }
  h2{
    font-family: ${fonts.heading2};
    font-size: 3.3rem;
    line-height: 1.4;
    margin: 1rem 0rem;
    color: #343434;
    
    

  }
  h3{
    font-family: ${fonts.heading2};
    font-size: 2.7rem;
    line-height: 1.5;
    margin: 1rem 0;
    color: #4F4F4F;
    position:relative;
  }
  h4{
    font-family: ${fonts.heading2};
    font-size: 2.3rem;
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
    font-family: ${fonts.heading2};
    font-size: 1.9rem;
    line-height: 1.3;
    letter-spacing: .2rem;
    color: #4F4F4F;
    margin: 2rem 0rem;
    font-style: italic;
    max-width: 80rem;
  }
  h6{
    font-family: ${fonts.para2};
    font-size: 1.9rem;
    line-height: 1.2;
    letter-spacing:.1rem;
    color: #9C640C;
    position: relative;
    margin-bottom: 1rem;

    &:after{
      content: "";
      position:absolute;
      left: 0;
      bottom: -.5rem;
      width: 10rem;
      height:2px;
      background-color: #9C640C;
    }
    
  }
  p{
    

  }
  span{
    font-family: ${fonts.para2};
    font-size: 1.3rem;
    line-height: 1.2;
    color: #6D6D6D;
    margin: 0;
  }

  *{
    max-width: 90vw;
  }
`

const SectionPara = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${()=>respond('m','grid-template-columns: 20rem 1fr;')}

`
const Side = styled.div`
  padding: 2rem 0rem;
  display: flex;
  flex-direction:column;
  
  ${()=>respond('m',`
    border-right: 1px solid rgba(156, 100, 12,.3);
    flex-direction: column; 
    align-items:center;
    padding: 2rem 1rem;
  `
  )}
`
const ParaMain = styled.p`
    font-family: ${fonts.para2};
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 1.4;
    color: #4F4F4F;
    width: 56rem;
    margin: 2rem 0;

    ${()=>respond('m','margin: 2rem;')}
    
`
const ParaSide = styled.p`
  color: #9C640C;
  font-size: 1.6rem;
  font-style: italic;
  margin: 0;

  ${()=>respond('m','margin: 2rem 0;')}

`

const ImageBox = styled.div`
  width: 80rem;
  height: 20rem;
  overflow:hidden;
  margin: 1rem 0;
  

  img{
    height: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    
  }
`