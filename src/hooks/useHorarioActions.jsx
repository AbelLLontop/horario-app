import { useContext, useEffect } from 'react';
import {
  PreProcessContext,
  SetPreProcessContext,
} from '../contexts/HoraryContext';

import { generatePreCourses } from '../utilities/generatePreCourses';
import useReadData from './useReadData';

const useHorarioActions = () => {
  const setPreProcessContext = useContext(SetPreProcessContext);
  const preProcessContext = useContext(PreProcessContext);
  const [cleanData] = useReadData();
  useEffect(() => {
    const preProcess = generatePreCourses(cleanData);
    setPreProcessContext(preProcess);
  }, [cleanData]);

  return [preProcessContext];
};

export default useHorarioActions;
