import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 320
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))
export default function RecipeReviewCard ({ user }) {
  const classes = useStyles()
  const { name, photo, email } = user
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photo}
        title="Paella dish"
      />
      <CardHeader
        title={name}
        subheader={email}
      />
      <CardContent>
      </CardContent>
    </Card>
  )
}