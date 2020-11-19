import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useSpring, animated } from 'react-spring/web.cjs' // web.cjs is required for IE 11 support
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { Add as AddIcon } from '@material-ui/icons'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  style: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}))

const Fade = React.forwardRef(function Fade (props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
}

const SpringModal = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [ideas, setIdeas] = useState({
    title: '',
    author: '',
    description: '',
    imgUrl: ''

  })
  const handleChange = e => {
    setIdeas({
      ...ideas,
      [e.target.name]: e.target.value
    })
    console.log()
  }
  const { title, author, description, imgUrl } = ideas;

  const submitIdeas = e => {
  e.preventDefault()
    console.log(title)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const postIdea = async () => {
    const request = await axios.post(`http://localhost:8080/ideas`)
    console.log(request)
    setOpen(false)
  }

  return (
    <div>
      <Button className={classes.style} onClick={handleOpen}>
        react-spring
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Crear Nueva Idea</h2>
            <InputBase
              placeholder="titulo…"
              inputProps={{ 'aria-label': 'title' }}
              name={'title'}
              onChange={handleChange}
            />
            <InputBase
              placeholder="author…"
              inputProps={{ 'aria-label': 'author' }}
              name={'author'}
              onChange={handleChange}
            />
            <InputBase
              placeholder="description"
              inputProps={{ 'aria-label': 'description' }}
              name={'description'}
              onChange={handleChange}
            />
            <InputBase
              placeholder="imageUrl"
              inputProps={{ 'aria-label': 'imageUrl' }}
              name={'imageUrl'}
              onChange={handleChange}
            />
            <IconButton onClick={postIdea}><AddIcon/></IconButton>

          </div>
        </Fade>
      </Modal>
    </div>
  )
}
export default SpringModal