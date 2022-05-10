import { useState } from 'react';
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
    startTime: 5,
    time: 1,
    day: 'jueves',
    color: '#ff0000'
  },
  {
    id: 2,
    name: 'Curso 2',
    startTime: 7,
    time: 1,
    day: 'lunes',
  },
  {
    id: 3,
    name: 'Curso 3',
    startTime: 1,
    time: 4,
    day: 'martes',
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
    day: 'miercoles',
  },
  {
    id: 7,
    name: 'Curso 7',
    startTime: 7,
    time: 1,
    day: 'lunes',
  },
  {
    id: 8,
    name: 'Curso 8',
    startTime: 1,
    time: 4,
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

  const [courses, setCourses] = useState(parseCourses(cursos))


  return <WeekCourses cursos={courses}/>

}

export default App;
