import React, { createContext, useState } from 'react'

export const Context = createContext(undefined)
export const ContextProvider = props => {
  const [user, setUser] = useState(null)
  return <Context.Provider value={{ user, setUser }}>
    {props.children}
  </Context.Provider>
}
