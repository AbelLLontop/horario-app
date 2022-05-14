import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HoraryContext, SetHoraryColorsContext, SetHoraryContext } from '../contexts/HoraryContext';

import { parseCourses } from '../utilities/parseCourses';

const cursos = [
  {
    id: 1,
    startTime: 7,
    time: 1,
    day: 'lunes',
    show: true,
    data: {
      name: 'Curso 1',
      codigo: 'U',
      profesor: 'Profesor 1',
      type: 'Laboratorio',
      group: 'Grupo 1',
    },
  },
  {
    id: 2,
    startTime: 7,
    time: 1,
    day: 'martes',
    show: true,
    data: {
      name: 'Curso 1',
      codigo: 'B',
      profesor: 'Profesor 1',
      type: 'Laboratorio',
      group: 'Grupo 1',
    },
  },
  {
    id: 3,
    startTime: 7,
    time: 1,
    day: 'miercoles',
    show: true,
    data: {
      name: 'Curso 1',
      codigo: 'B',
      profesor: 'Profesor 1',
      type: 'Laboratorio',
      group: 'Grupo 1',
    },
  },
  {
    id: 4,
    startTime: 7,
    time: 1,
    day: 'jueves',
    show: true,
    data: {
      name: 'Curso 1',
      codigo: 'D',
      profesor: 'Profesor 1',
      type: 'Laboratorio',
      group: 'Grupo 1',
    },
  },
  {
    id: 5,
    startTime: 7,
    time: 1,
    day: 'viernes',
    show: true,
    data: {
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',
      group: 'Grupo 1',
    },
  },
];

const getHorarioURL = () => {
  //
  // const parseHorario2 = parseHorario.map(curso => {
  //   const timeInteger = parseInt(curso.time);
  //   return {
  //     ...curso,
  //     time: timeInteger,
  //   }
  // })
  // const final = parseCourses(parseHorario2);
};

const useHorarioActions = () => {
  const [courses, setCourses] = useState([]);
  const { horary } = useContext(HoraryContext);
  const  horaryDispath  = useContext(SetHoraryContext);
  const colorHoraryDispath  = useContext(SetHoraryColorsContext);
  const { horarioJson } = useParams();
  const [stateMinMaxHour, setStateMinMaxHour] = useState({min: 0, max: 0});

  useEffect(() => {
    if (horarioJson) {
      const parseHorario = JSON.parse(horarioJson);

      const parseHorario2 = parseHorario.map((curso) => {
        const timeInteger = parseInt(curso.time);
        return {
          data: {
            codigo: curso.codigo,
            type: curso.type,
            name: curso.name,
            group: curso.group,
            profesor: curso.proffesor,
          },
          startTime: curso.startTime,
          day: curso.day,
          show: true,
          id: curso.id,
          time: timeInteger,
        };
      });

    

      horaryDispath({ type: 'SET_ALL_COURSES', payload: parseHorario2 });
     // setCourses(coursesFiltered);
    }
  }, [horarioJson]);

  useEffect(() => {
   
    const { coursesFiltered, groupsWitchColors,minMaxHour } =parseCourses(horary.courses);
    colorHoraryDispath({ type: 'SET_COLOR_ALL', payload: groupsWitchColors });
    colorHoraryDispath({ type: 'SET_FIRST_HOUR', payload: minMaxHour.min });
    colorHoraryDispath({ type: 'SET_LAST_HOUR', payload: minMaxHour.max });
    setStateMinMaxHour(minMaxHour);    
    colorHoraryDispath({ type: 'SET_COLOR_ALL', payload: groupsWitchColors });

    setCourses(coursesFiltered);
    console.log(courses)
  }, [horary]);

  return [courses,stateMinMaxHour];
};

export default useHorarioActions;
