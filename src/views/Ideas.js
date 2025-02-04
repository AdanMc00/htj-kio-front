import React, { useState, useEffect } from 'react'
import AppBarLoged from '../components/AppBarLoged'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '../components/Modal'
import axios from 'axios'
import CardList from '../components/CardList'
import UserCard from '../components/UserCard'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  style: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: '15px 0 '
  }
}))
export default function SimpleContainer () {
  const classes = useStyles()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const log = document.cookie
  if (!log) throw (Error)
  let valor = document.cookie.split('token=')
  const [cookie] = useState(valor[1].split(';', 1))
  let logedUserId = document.cookie.split('idprov=')
  const [idProv] = useState(logedUserId[1])
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/${idProv}`)
      .then(response => setUser(response.data.data.user))
  }, [])
  const [idea, setIdea] = useState({
    title: '',
    author: user.name,
    description: '',
    imageUrl: '',
    userId: user.provider_id
  })
  const createIdea = ideas => {
    setIdea({
      ...idea,
      ideas,
    })
  }
  const getMyIdeas = async () => {
    await axios.get(`http://localhost:8080/ideas/${idProv}`, {
      params: {
        access_token: cookie[0],
      }
    }).then(async (response) => {
      console.log(response.data.data.idea)
      const dataPayload = await response.data.data.idea
      const myIdeaCard = await dataPayload.map((badIdea) => ({
        title: badIdea.title,
        author: badIdea.author,
        dateCreate: badIdea.dateCreate,
        description: badIdea.description,
        imageUrl: badIdea.imageUrl,
      }))
      setAllIdeas(
        myIdeaCard
      )
    })
  }
  const [allIdeas, setAllIdeas] = useState([])
  const getAllIdeas = async () => {
    const response = await axios.get(`http://localhost:8080/ideas?access_token=${cookie}`)
    const dataPayload = await response.data.data.ideas
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
  }
  const [searchs, setSearch] = useState({})
  const { title } = searchs
  const searchIdea = async () => {
    await axios.get(`http://localhost:8080/search/${title}`).then(async (response) => {
      console.log(response.data.data.ideas)
      const payload = response.data.data.ideas
      const searchCard = await payload.map((badIdea) => ({
        title: badIdea.title,
        author: badIdea.author,
        dateCreate: badIdea.dateCreate,
        description: badIdea.description,
        imageUrl: badIdea.imageUrl,
      }))
      setAllIdeas(
        searchCard
      )
      console.log(allIdeas)
    })
  }
  return (
    <React.Fragment>
      <AppBarLoged searchIdea={searchIdea}/>
      <Container>
        <Box my='15px' display={'flex'} flexWrap={'wrap'} justifyContent={isSm ? 'space-around' : 'center'}
             alignItems={'center'}>
          <UserCard user={user}/>
          <Box>
            <Modal user={user} createIdea={createIdea} onAddIdea={getAllIdeas} fullWidth/>
            <Button onClick={getAllIdeas} fullWidth variant="contained" className={classes.style}>Todas
              las Ideas</Button>
            <Button onClick={getMyIdeas} fullWidth variant="contained" className={classes.style}>Mis Ideas</Button>
          </Box>
        </Box>
        <CardList user={user} allIdeas={allIdeas}/>
      </Container>
    </React.Fragment>
  )
}
