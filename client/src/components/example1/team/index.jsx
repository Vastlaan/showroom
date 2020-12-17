import React from 'react'
import styled from 'styled-components'
import Heading from '../utils/heading'
import Personel from './personel'
import {respond, SectionNarrow} from '../../../styles'
import Img1 from '../../../img/team-1.jpg'
import Img2 from '../../../img/team-2.jpg'
import Img3 from '../../../img/team-3.jpg'

function Team(props, ref) {
  return (
    <SectionNarrow ref={ref} id="team">
      <Heading headline="Wie zijn wij" para="Maak kennis met onze medewerkers"></Heading>
      <Personel data={data}/>
    </SectionNarrow>
  )
}

export default React.forwardRef(Team)

const data = [
  {
    id: 'person-1',
    img:Img1,
    name: "Remco Onber",
    function: "team leader",
    description: "Nullam faucibus mi quis velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    twitter: "https://twitter.com",
    facebook:"https://facebook.com",
    linkedin:"https://linkedin.com",

  },
   {
    id: 'person-2',
    img:Img2,
    name: "Jan Meier",
    function: "sales",
    description: "Nullam faucibus mi quis velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    twitter: "https://twitter.com",
    facebook:"https://facebook.com",
    linkedin:"https://linkedin.com",

  },
   {
    id: 'person-3',
    img:Img3,
    name: "Sabina Loch",
    function: "developer",
    description: "Nullam faucibus mi quis velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    twitter: "https://twitter.com",
    facebook:"https://facebook.com",
    linkedin:"https://linkedin.com",

  }
]

