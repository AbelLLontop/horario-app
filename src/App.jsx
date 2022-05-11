import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WeekCourses from './components/Timetable/WeekCourses';
import { parseCourses } from './utilities/parseCourses';





const formato = {
    id: 1,
    startTime: 7,
    time: 1,
    day: 'lunes',
    show: true,
    backgroundColor: '#ff0000',
    color: '#ffffff',
    data:{
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',	
      group: 'Grupo 1',
    }
};

const cursos = [
  {
    id: 1,
    startTime: 7,
    time: 1,
    day: 'lunes',
    show: true,
    backgroundColor: '#ff0000',
    color: '#ffffff',
    data:{
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',	
      group: 'Grupo 1',
    }
},
  {
    id: 2,
    startTime: 7,
    time: 1,
    day: 'martes',
    show: true,
    backgroundColor: '#ff0000',
    color: '#ffffff',
    data:{
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',	
      group: 'Grupo 1',
    }
},
  {
    id: 3,
    startTime: 7,
    time: 1,
    day: 'miercoles',
    show: true,
    backgroundColor: '#ff0000',
    color: '#ffffff',
    data:{
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',	
      group: 'Grupo 1',
    }
},
  {
    id: 4,
    startTime: 7,
    time: 1,
    day: 'jueves',
    show: true,
    backgroundColor: '#ff0000',
    color: '#ffffff',
    data:{
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',	
      group: 'Grupo 1',
    }
},
  {
    id: 5,
    startTime: 7,
    time: 1,
    day: 'viernes',
    show: true,
    backgroundColor: '#ff0000',
    color: '#ffffff',
    data:{
      name: 'Curso 1',
      codigo: 'A',
      profesor: 'Profesor 1',
      type: 'Laboratorio',	
      group: 'Grupo 1',
    }
}
];

function App() {
  const [courses, setCourses] = useState([]);
  const { horarioJson } = useParams();


  useEffect(() => {
    // const parseHorario = JSON.parse(horarioJson);
    // const parseHorario2 = parseHorario.map(curso => {
    //   const timeInteger = parseInt(curso.time);
    //   return {
    //     ...curso,
    //     time: timeInteger,
    //   }
    // })

    // const final = parseCourses(parseHorario2);
    const final = parseCourses(cursos);
    console.log(final);

    setCourses(final);
  }, [horarioJson]);

  return <WeekCourses cursos={courses} />;
}

export default App;
