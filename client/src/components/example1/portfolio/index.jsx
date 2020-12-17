import React from 'react'
import styled from 'styled-components'
import Heading from '../utils/heading'
import {SectionNarrow} from '../../../styles'

function Portfolio(props, ref) {
  return (
    <SectionNarrow ref={ref} id="portfolio">
      <Heading headline="portfolio" para="Duik in onze projecten en leer ons better kennen "/>
    </SectionNarrow>
  )
}
export default React.forwardRef(Portfolio)
