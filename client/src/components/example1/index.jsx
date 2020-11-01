import React from 'react'
import Layout from '../layout'
import Article from './article'
import Nav from '../navigation1'
import Header1 from '../header1'
import Header2 from '../header2'

export default function example1() {
  return (
    <Layout>
      <Nav/>
      <Header1/>
      <Article />
      <Header2/>
      <Article />
    </Layout>
  )
}

