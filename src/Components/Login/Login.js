import React from 'react'
import Banner from './Banner'
import Stream from './Stream'
import DownloadNow from './DownloadNow'
import Group from './Group'
import styled from 'styled-components'
import Panther from './Panther'
import Footgrid from './Footgrid'
import Footer from './Footer'
const Login = () => {
  return (
    <div>
      <Main>
        <Banner/>
        <Stream/>
        <Group/>
        <Panther/>
        <DownloadNow/>
        <Footgrid/>
        <Footer/>
      </Main>
    </div>
  )
}

const Main=styled.main`
width:auto;
height:auto;
overflow:auto; 
`;
export default Login
