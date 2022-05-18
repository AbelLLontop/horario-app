import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { courseAdapter } from '../adapters/courseAdapter';

const useReadData = () => {
  const { horarioJson } = useParams();
  const [cleanData, setCleanData] = useState([]);

  useEffect(() => {
    if (horarioJson) {
      const parseHorario = JSON.parse(horarioJson);
      const horaryFormatted = parseHorario.map((course) => {
        return courseAdapter(course);
      });
      setCleanData(horaryFormatted);
    }
  }, [horarioJson]);
  return [cleanData];
};

export default useReadData;
