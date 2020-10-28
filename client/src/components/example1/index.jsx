import React from 'react'
import Layout from '../layout'
import Article from '../article1'
import Menu from '../sideMenu1'

export default function example1({isMenuDisplayed, setIsMenuDisplayed}) {
  return (
    <Layout>
      <Menu isMenuDisplayed={isMenuDisplayed} setIsMenuDisplayed={setIsMenuDisplayed}/>
      <Article />
    </Layout>
  )
}

