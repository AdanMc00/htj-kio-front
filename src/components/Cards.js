import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function RecipeReviewCard ({ title, author, dateCreate,description, imageUrl }) {
  const classes = useStyles()

  console.log(title)
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>

          </Avatar>
        }

        title={title}

        subheader={<Typography variant ='caption' color={'textPrimary'} noWrap> {dateCreate} </Typography>}subheader={<Typography variant ='caption' color={'textSecondary'} noWrap> {dateCreate} </Typography>}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

          {author}

        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">


          {description}
        </Typography>
      </CardContent>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon/>
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon/>
      </IconButton>
    </Card>
  )
}