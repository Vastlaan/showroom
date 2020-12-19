import React, {useEffect, useState} from 'react'
import Nav from './navigation'
import Header from './header'
import Quote from './utils/quote'
import Overlaping from './overlaping'

export default function Main() {

  const [data, setData] = useState([])

  async function fetchData(){
    console.log(process.env.NODE_ENV)
    try{
      if(process.env.NODE_ENV==='development'){
        const res = await fetch('http://192.168.2.9:1337/links')
        const d = await res.json()
        setData(d)
      }else{
        const res = await fetch('http://api.itcontext.nl/links')
        const d = await res.json()
        setData(d)
      }
      
    }
    catch(e){console.error(e)}
  }

  useEffect(()=>{
    fetchData()
  },[])
  

  return (
    <>
      <Nav data={data}/>
      <Header/>
      <Quote headline='Wij ontwerpen websites die verbasen jouw publiek.' subline="Alice Atchuk"/>
      <Overlaping/>
    </>
  )
}

