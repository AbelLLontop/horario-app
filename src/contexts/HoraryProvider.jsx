import React from 'react'
import { HoraryContext } from './HoraryContext'

const data = {
  test: 'test'
}


const HoraryProvider = ({children}) => {
  return (
    <HoraryContext.Provider value={{data}}>
      
    </HoraryContext.Provider>
  )
}

export default HoraryProvider