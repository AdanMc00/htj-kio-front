import React from 'react'
import Cards from '../components/Cards'
import Grid from '@material-ui/core/Grid'

export default function CardList ({ allIdeas }) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {
          allIdeas.map((idea, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Cards
                title={idea.title}
                author={idea.author}
                dateCreate={idea.dateCreate}
                description={idea.description}
                imageUrl={idea.imageUrl}
                userId={idea.userId}
              />
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  )
}
