import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DayCourses from './components/Timetable/DayCourses';
import WeekCourses from './components/Timetable/WeekCourses';
import { parseCourses } from './utilities/parseCourses';
const formato = {
  id: 1,
  name: 'Curso 1',
  startTime: 5,
  time: 1,
  day: 'jueves',
}


const cursos = [
  {
    id: 1,
    name: 'Curso 1',
    startTime: 1,
    time: 1,
    day: 'lunes'
  },
  {
    id: 15,
    name: 'Curso 11',
    startTime: 1,
    time: 1,
    day: 'jueves'
  },
  {
    id: 2,
    name: 'Curso 2',
    startTime: 7,
    time: 1,
    day: 'lunes',
  },

  {
    id: 4,
    name: 'Curso 4',
    startTime: 3,
    time: 4,
    day: 'lunes',
  },
  {
    id: 5,
    name: 'Curso 5',
    startTime: 1,
    time: 4,
    day: 'martes',
  },
  {
    id: 6,
    name: 'Curso 6',
    startTime: 5,
    time: 1,
    day: 'lunes',
  },
  {
    id: 7,
    name: 'Curso 7',
    startTime: 7,
    time: 1,
    day: 'lunes',
  },
  
  {
    id: 9,
    name: 'Curso 9',
    startTime: 3,
    time: 4,
    day: 'miercoles',
  },
  {
    id: 10,
    name: 'Curso 10',
    startTime: 1,
    time: 4,
    day: 'viernes',
  },
];

function App() {
  const [courses, setCourses] = useState([])
  const {horarioJson} =useParams();
  
  useEffect(() => {
    const parseHorario = JSON.parse(horarioJson);
    console.log('cursos sin transformar')

    //console.log(cursos)
    const parseHorario2 = parseHorario.map(curso => {
      const timeInteger = parseInt(curso.time);
      return {
        ...curso,
        time: timeInteger,
      }
    })


    console.log(parseHorario2)
    console.log(cursos)
   
    
    const final = parseCourses(parseHorario2);
    const cursosFiltrados = parseCourses(cursos);
   console.log('cursos transformados')
    console.log(final)
    console.log(cursosFiltrados)


    setCourses(final)
  }, [horarioJson]);

 


  return <WeekCourses cursos={courses}/>

}

export default App;
