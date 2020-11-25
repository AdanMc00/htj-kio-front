import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import MainAppBar from '../components/MainAppBar'
import AutoCarousel from '../components/AutoCarousel'
import Medium from '../components/Medium'

export default function SimpleContainer () {
  return (
    <React.Fragment>
      <CssBaseline/>
      <MainAppBar/>
      <Container maxWidth="md">
        <AutoCarousel/>
      </Container>
      <Container maxWidth="md" style={{ height: 100 }}>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum."</p>
      </Container>
      <Container maxWidth="md">
        <Medium/>
      </Container>
      <Container maxWidth="md">
        <Medium/>
      </Container>
    </React.Fragment>
  )
}

