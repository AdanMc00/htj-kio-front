import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useSpring, animated } from 'react-spring/web.cjs'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import { Add as AddIcon } from '@material-ui/icons'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'row',
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
    margin: '15px 0'
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
const SpringModal = ({user, createIdea, onAddIdea,  }) => {

  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [ideas, setIdeas] = useState({
    title: '',
    author: user.name,
    description: '',
    imageUrl: '',
    userId:user.provider_id

  })
  console.log(ideas)
  const [error, setError] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = e => {
    setIdeas({
      ...ideas,
     author: user.name,
      userId:user.provider_id,

      [e.target.name]: e.target.value
    })
  }
  const { title, author, description, imageUrl } = ideas

  let valor = document.cookie.split('token=')
  const [cookie] = useState(valor[1].split(';', 1))

  const submitIdeas = async e => {
    e.preventDefault()
    if (title.trim() === '' || description.trim() === '' ||
      imageUrl.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    createIdea(ideas)

    await axios.post(`http://localhost:8080/ideas?access_token=${cookie}`, ideas).then((result) => {
    })
    setIdeas({
      title: '',
      author: '',
      description: '',
      imageUrl: '',
      userId:''
    })
    setOpen(false)
    onAddIdea()
  }
  return (
    <div style={{ width: '100%' }}>
      <Button className={classes.style} fullWidth variant="contained" onClick={handleOpen}>
        Crear Idea
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
          <form
            onSubmit={submitIdeas}>
            <div className={classes.paper}>
              {error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null}
              <h2 id="spring-modal-title">Crear Nueva Idea</h2>
              <InputBase
                placeholder="titulo…"
                inputProps={{ 'aria-label': 'title' }}
                name={'title'}
                onChange={handleChange}
                value={title}
              />
              <InputBase
                placeholder="author…"
                inputProps={{ 'aria-label': 'author' }}
                name={'author'}
                onChange={handleChange}
                value={user.name}
                readOnly={true}
              />
              <InputBase
                placeholder="description"
                inputProps={{ 'aria-label': 'description' }}
                name={'description'}
                onChange={handleChange}
                value={description}
              />
              <InputBase
                placeholder="imageUrl"
                inputProps={{ 'aria-label': 'imageUrl' }}
                name={'imageUrl'}
                onChange={handleChange}
                value={imageUrl}
              />
              <button
                type={'submit'}><AddIcon/></button>
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  )
}
export default SpringModal