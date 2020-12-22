import React, {useEffect, useState} from 'react'
import Loading from './utils/loading'
import Nav from './navigation'
import Header from './header'
import Quote from './utils/quote'
import Overlaping from './overlaping'
import {BackgroundTransition} from '../../styles'

export default function Main() {

  const [data, setData] = useState([])

  
  async function fetchData(){
    
    try{
      if(process.env.NODE_ENV==='development'){
        const res = await fetch('http://localhost:1339/t-4-s')
        const d = await res.json()
        setData(d)
        console.log(d)
        
      }else{
        const res = await fetch('https://api.itcontext.nl/t-4-s')
        const d = await res.json()
        setData(d)
      }
      
    }
    catch(e){console.error(e)}
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(data.length===0){
    return(
      <Loading/>
    )
  }
  

  return (
    <>
      <Nav data={data[0].links}/>

      <Header data={data[0].t_4_landing_header}/>
      <BackgroundTransition/>
      <Overlaping data={data[0].t_4_landing_section_overlaping}/>

      <Quote headline={data[0].quotes[0].text} subline={data[0].quotes[0].name}/>
      {/* <Quote headline={data[0].quotes[1].text} subline={data[0].quotes[1].name}/> */}
    </>
  )
}

