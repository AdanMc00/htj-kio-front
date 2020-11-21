import React from 'react'
import Cards from '../components/Cards'

export default function userMenu ({ user }) {
  console.log(user)
  return (
    <div>
      {
        user.map(item => (
          <Cards
            name={item.name}
            email={item.email}
            photo={item.photo}

          />

        ))

      }
    </div>
  )
}
