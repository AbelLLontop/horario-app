import React, {useState } from 'react';
import {
  PreProcessContext,
  SetPreProcessContext,
} from './HoraryContext';


const HoraryProvider = ({ children }) => {

const [preProcessContext, setPreProcessContext] = useState([])


  return (
    <SetPreProcessContext.Provider value={setPreProcessContext}>
      <PreProcessContext.Provider value={preProcessContext}>      
                {children}
      </PreProcessContext.Provider>
    </SetPreProcessContext.Provider>
  );
};

export default HoraryProvider;
