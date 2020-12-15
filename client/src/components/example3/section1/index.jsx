import React from 'react'
import styled from 'styled-components'
import {fonts, respond, Section, Content} from '../../../styles'
import Img1 from '../../../img/shine-1.png'
import Img2 from '../../../img/shine-2.png'
import Img3 from '../../../img/shine-3.png'
import Decoration from '../../decorative2'

export default function Section1() {
  return (
    <Section>
      <Content>
        <Grid>
          <CT>
            <img src={Img1} alt="cleaning service"/>
            <h3>Professionele<span> team</span></h3>
            <div></div>
            <p>Solid betrouwbaar en betrokken schoonmakers. Altijd betaalbaar diensten waneer je dat nodig hebt.</p>
          </CT>
          <LM>
            <img src={Img2} alt="cleaning service"/>
            <h3>Ervaren <span>schoonmankers</span></h3>
            <div></div>
            <p>Betrouwbaar en betrokken, betaalbaar diensten waneer je dat nodig hebt.</p>
          </LM>
          <RB>
            <img src={Img3} alt="cleaning service"/>
            <h3>Tevreden <span>klanten</span></h3>
            <div></div>
            <p>Altijd betaalbaar diensten waneer je dat nodig hebt.</p>
          </RB>
        </Grid>
      </Content>
      <Decoration gap='1.3rem' style={{position:'absolute', top: 0, left: 0}}/>
      <Decoration gap='1.3rem' style={{position:'absolute', bottom: '0', left: 0}}/>
    </Section>
  )
}

const Grid = styled.div`
  padding: 9rem 4.7rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  

  ${()=>respond('l',`grid-template-columns: repeat(3,1fr);`)}


`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img{
    max-width: 200px;
  }

  h3{
    font-family: ${fonts.poppins};
    font-size: 3.3rem;
    font-weight: 700;
    color: ${p=>p.theme.primary3};
    line-height: 1.3;
    text-align: center;

    ${()=>respond('l','font-size: 3.3rem;line-height: 1.2;')}

    span{
      color: ${p=>p.theme.secondary3};
    }
  }

  div{
    width: 40%;
    height: 2px;
    background-color: ${p=>p.theme.secondary3};
  }

  p{
    margin: 2.7rem 0;
    font-family: ${fonts.heading3};
    font-size: 1.9rem;
    line-height: 1.6;
    color: ${p=>p.theme.grey4};
    max-width: 45rem;
    text-align: center;
  }
`
const CT = styled(Info)`
  grid-column: 1/2;
  grid-row: 1/2;

  ${()=>respond('l',`grid-column: 2/3;`)}
`
const LM = styled(Info)`
  grid-column: 1/2;
  grid-row: 2/3;

  ${()=>respond('l',`grid-column: 1/2;`)}
`
const RB = styled(Info)`
  grid-column: 1/2;
  grid-row: 3/4;

  ${()=>respond('l',`grid-column: 3/4;`)}
`
