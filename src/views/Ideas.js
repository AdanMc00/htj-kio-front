import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import AppBarLoged from '../components/AppBarLoged'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Modal from '../components/Modal'
import axios from 'axios'
import CardList from '../components/CardList'

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}
export default function SimpleContainer () {
  const [idea, setIdea] = useState([])
  const createIdea = ideas => {
    setIdea([
      ...idea,
      ideas,
    ])
  }
  const getMyIdeas = () => {
    const filterIdeas = allIdeas.filter(idea => idea.author === `${allIdeas.author}`)

  }

  const [allIdeas, setAllIdeas] = useState([])

  const getAllIdeas = async () => {
    const response = await axios.get(`http://localhost:8080/ideas`)
    const payload = await response.data
    console.log(response.data)
    const dataPayload = await payload.data.ideas
    const ideaCard = await dataPayload.map((badIdea) => ({
      title: badIdea.title,
      author: badIdea.author,
      dateCreate: badIdea.dateCreate,
      description: badIdea.description,
      imageUrl: badIdea.imageUrl,
    }))

    setAllIdeas(
      ideaCard
    )
    console.log(allIdeas)
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBarLoged style={style}/>
      <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ marginTop: 15 }}
            spacing={2}
      >
        <Grid item xs={8} sm={3} md={2}>
          <Button onClick={getMyIdeas} fullWidth variant="contained" style={style}>Mis Ideas</Button>
        </Grid>
        <Grid item xs={8} sm={3} md={2}>
          <Button onClick={getAllIdeas} fullWidth variant="contained" style={style}>Todas
            las Ideas</Button>
        </Grid>
        <Grid item xs={8} sm={3} md={2}>
          <Modal createIdea={createIdea}/>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid item xs={6} xl={12}>
          <CardList allIdeas={allIdeas}/>
        </Grid>
      </Grid>


    </React.Fragment>
  )
}