import React, {useState} from 'react'
import styled from 'styled-components'
import {respond, HeadlineT42, List, ButtonT4} from '../../../styles'
import Img from '../../../img/t4-background-2.jpg'
import Img1 from '../../../img/t4-img-4.png'
import Img2 from '../../../img/t4-img-3.png'

export default function OverlapingComponent({data}) {

  const [isOnTop, setIsOnTop] = useState(1)
  const {btn, img1, img2, url, list, heading} =data

  return (
    
      <BackgroundImage>
        <Content>
        <Grid>
          <Pictures>
            <Image1 top={isOnTop===1?true: false} onClick={()=>setIsOnTop(1)}>
              <img src={`https://api.itcontext.nl${img1.url}`} alt="print screen of the website"/>
            </Image1>
            <Image2 top={isOnTop===2?true: false} onClick={()=>setIsOnTop(2)}>
              <img src={`https://api.itcontext.nl${img2.url}`}  alt="print screen of the website"/>
            </Image2>
          </Pictures>
          <Info>
            <HeadlineT42>{heading}</HeadlineT42>
            <List>
              {list.map(item=>{
                return <li key={item.id}>{item.item}</li>
              })}
            </List>
            <ButtonT4>{btn}</ButtonT4>
          </Info>
        </Grid>
        </Content>
      </BackgroundImage>
    
    
  )
}
const Content = styled.div`
  padding-bottom: 30rem;

  ${()=>respond('s','padding-bottom: 0;')}
`
const BackgroundImage = styled.section`

  width: 100%;
  //min-height: 75rem;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center right;

`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr auto;
  grid-gap: 1.4rem;

  ${()=>respond('l',`
    grid-template-columns: repeat(12, 1fr);
    
  `)}
`
const Info =styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  padding: 2.7rem;

  ${()=>respond('s','grid-column: 8/13; grid-row: 1/2;')}

  ul{
    margin: 1.4rem 0;
  }

  button{
    align-self: flex-start;
  }
`
const Pictures = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 45rem;

  ${()=>respond('s','grid-column: 1/8; min-height: 55rem;')}
  ${()=>respond('l','grid-column: 1/8; min-height: 55rem;')}
  ${()=>respond('xxl','grid-column: 1/8; min-height: 70rem;')}

`
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all .3s;
  padding-bottom: 2.7rem;
  
  img{
    max-width: 100%;
    width: 39rem;   //97, 65, 48
    height: 31rem;  //63, 42, 31

  ${()=>respond('s',`
    width: 39rem;  
    height: 31rem;  
    
  `)}

    ${()=>respond('xl',`
    width: 69rem;   
    height: 56rem;  
    
  `)}
  ${()=>respond('xxl',`
    width: 77rem;   
    height: 63rem;  
    
  `)}
  }
`

const Image1 = styled(Image)`
  top: ${p=>p.top?'2.7rem':'2.7rem'};
  left:${p=>p.top?'0':'9.7rem'};
  z-index: ${p=>p.top?3:2};
  cursor: ${p=>p.top?"arrow":"pointer"};
  transform: ${p=>p.top?"scale(1.05)":"scale(1)"};
`
const Image2 =styled(Image)`
  top: ${p=>p.top?'2.7rem':'2.7rem'};
  left:${p=>p.top?'0':'9.7rem'};
  z-index: ${p=>p.top?3:2};
  cursor: ${p=>p.top?"arrow":"pointer"};
  transform: ${p=>p.top?"scale(1.1)":"scale(1)"};
`