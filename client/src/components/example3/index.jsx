import React from 'react'
import Navigation3 from './navigation3'
import Header4 from './header4'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Footer2 from './footer2'
import Layout from '../layout'

export default function Example3() {
  return (
    <>
      <Navigation3/>
      <Layout>
        <Header4/> 
        <Section2/>
        <Section1/>
        <Section3/>
        <Section4/>
      </Layout>
      <Footer2/>
    </>
  )
}
