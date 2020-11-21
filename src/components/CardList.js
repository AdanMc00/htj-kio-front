import React from 'react'
import Cards from '../components/Cards'

export default function CardList ({ allIdeas }) {
  console.log(allIdeas)
  return (
    <div>
      {
        allIdeas.map(idea => (
          <Cards
            title={allIdeas.title}
            author={allIdeas.author}
            dateCreate={allIdeas.dateCreate}
            description={allIdeas.description}
            allIdeas={allIdeas}
          />

        ))

      }
    </div>
  )
}
