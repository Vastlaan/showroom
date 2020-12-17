import React, {useState} from 'react'
import styled from 'styled-components'
import Heading from '../utils/heading'
import {SectionNarrow, fonts, ParaB1} from '../../../styles'
import { categories } from "../models/category";
import { projects } from "../models/project";

function Portfolio(props, ref) {

  const [type, setType] = useState("")

  return (
    <SectionNarrow ref={ref} id="portfolio">
      <Heading headline="portfolio" para="Duik in onze projecten en leer ons better kennen "/>
      <Categories>
        <Cat onClick={()=>setType("")}>all</Cat>
        {categories.map(cat=>{
          return(
            <Cat onClick={()=>setType(cat.type)}>{cat.type}</Cat>
          )
        })}
      </Categories>
      <Projects>
        {projects.map(project=>{
          
          if(!type || project.category.type===type){
            return(
              <Project key={project.id}>
                <Image>
                  <img src={project.img} alt="project preview"/>
                </Image>
                <h3>{project.name}</h3>
                <ParaB1>{project.description}</ParaB1>
              </Project>
            )
          }else{
            return(
              <Project key={project.id} style={{opacity: 0, visibility: 0, width: 0, height: 0, margin: 0, padding: 0}}>
                <Image>
                  <img src={project.img} alt="project preview"/>
                </Image>
                <h3>{project.name}</h3>
                <ParaB1>{project.description}</ParaB1>
              </Project>
            )
          }
          
        })}
      </Projects>
    </SectionNarrow>
  )
}
export default React.forwardRef(Portfolio)

const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.6rem 1.4rem;
`
const Cat = styled.button`
  margin: 1.4rem;
  padding: 1rem 2.7rem;
  background-color: ${p=>p.theme.yellow};
  color: ${p=>p.theme.grey1};
  font-family: ${fonts.heading1};
  font-size: 1.4rem;
  text-transform: capitalize;
  border: 3px solid ${p=>p.theme.grey1};
  cursor: pointer;
  transition: all .3s;

  &:hover{
    background-color: ${p=>p.theme.grey1};
    color: ${p=>p.theme.yellow};
  }
`
const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  min-height: 40rem;
`
const Image = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  &:before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    transition: all .3s;

  }

  img{
    transition: all .3s;
    width: 120%;

  }
`
const Project = styled.div`
  width: 35rem;
  height: 35rem;
  position: relative;
  margin: 1.4rem;
  padding: 1.4rem;
  transition: all .3s;
  box-shadow: 0 0 2rem rgba(0,0,0,.6);
  cursor: pointer;

  h3{
    font-family: ${fonts.heading1};
    text-shadow: .3rem .3rem .5rem rgba(0,0,0,.3);
    color: white;
    font-size: 2.7rem;
    transition: all .3s;
    margin-top: 8rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  p{
    opacity: 1;
    transition: all .3s;
  }

  &:hover{

    box-shadow: 0 0 1rem rgba(0,0,0,.3);

    h3{
      margin-top: 1.4rem;
    }
    p{
      opacity: 1;
    }

    ${Image}{

      img{
        transform: translateX(-10%);
      }
      &:before{
        background-color: transparent;
      }
    }
  }
  

`




