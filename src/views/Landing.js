import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import MainAppBar from '../components/MainAppBar'
import AutoCarousel from '../components/AutoCarousel'
import Medium from '../components/Medium'
import Footer from '../components/Footer'

export default function SimpleContainer () {
  return (
    <React.Fragment>
      <CssBaseline/>
      <MainAppBar/>
      <Container maxWidth="md">
        <AutoCarousel/>
      </Container>
      <Container maxWidth="md" style={{ height: 100 }}>
        <p>ASFFDFDBFGFHGNB</p>
      </Container>
      <Container maxWidth="md">
        <Medium/>
      </Container>
      <Footer/>

    </React.Fragment>
  )
}

