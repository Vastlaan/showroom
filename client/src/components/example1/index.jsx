import React, {useRef, useEffect, useState} from 'react'
import Nav from './nav'
import Header from './header'
import Carousel from './carousel'
import ParallaxBackground from './utils/parallaxBackground'
import VideoBackground from './utils/videoBackground'
import Subscribe from './subscribe'
import Team from './team'
import Portfolio from './portfolio'
import Footer from './footer'

export default function Example1() {

  const carousel = useRef()
  const newsletter = useRef()
  const team = useRef()
  const portfolio = useRef()
  const [inSight, setInSight] = useState("")

  useEffect(()=>{

    function setView(){

      if(portfolio.current.offsetTop - window.scrollY < window.innerHeight / 2){
        return setInSight('portfolio')
      }

      if(team.current.offsetTop - window.scrollY < window.innerHeight / 2){
        return setInSight('team')
      }

      if(newsletter.current.offsetTop - window.scrollY < window.innerHeight / 2){
        return setInSight('newsletter')
      }
      
      if(carousel.current.offsetTop - window.scrollY < window.innerHeight / 2){
        return setInSight('carousel')
      }
      if(carousel.current.offsetTop - window.scrollY > window.innerHeight / 2){
        return setInSight('')
      }
    }

    console.log(carousel.current)
    window.addEventListener('scroll', setView)

    return ()=>window.removeEventListener('scroll', setView)
  }, [])

  return (
    <>
      <Nav inSight={inSight} setInSight={setInSight}/>
      <Header/>
      <Carousel ref={carousel}/>
      <ParallaxBackground 
        headline="Wij ontwerpen creative websites" 
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusamus in dicta deserunt modi, sapiente eveniet at ipsum qui. Et possimus dolorem non praesentium excepturi ipsum consectetur, aliquam laboriosam?"
      />
      <Subscribe ref={newsletter}/>
      <VideoBackground 
        headline="Video Background" 
        para="Simple en effective"
      />
      <Team ref={team}/>
      <Portfolio ref={portfolio}/>
      <Footer/>
    </>
      
  )
}

