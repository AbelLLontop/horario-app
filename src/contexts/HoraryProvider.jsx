import React, { useMemo, useReducer } from 'react'
import { HoraryColorsContext, HoraryContext, SetHoraryColorsContext, SetHoraryContext } from './HoraryContext'
import { horarioColorReducer, horaryReducer, initialColorsHorary, initialHorary } from './HoraryReducer'



const HoraryProvider = ({children}) => {
const [horary,horaryDispath] = useReducer(horaryReducer,initialHorary);
const [colorHorary,colorHoraryDispath] = useReducer(horarioColorReducer,initialColorsHorary);

// const setters = useMemo(()=>({
//   horaryDispath,colorHoraryDispath
// }),[horaryDispath,colorHoraryDispath]);

return (
    
    <SetHoraryContext.Provider value={horaryDispath}>
    <HoraryContext.Provider value={{horary}}>
      <SetHoraryColorsContext.Provider value={colorHoraryDispath}>
      <HoraryColorsContext.Provider value={{colorHorary}}>
          {children}
      </HoraryColorsContext.Provider>
      </SetHoraryColorsContext.Provider>
    </HoraryContext.Provider>
    </SetHoraryContext.Provider>
  )
}

export default HoraryProvider