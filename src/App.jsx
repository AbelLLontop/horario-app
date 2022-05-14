import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WeekCourses from './components/Timetable/WeekCourses';
import { SetHoraryColorsContext } from './contexts/HoraryContext';
import useHorarioActions from './hooks/useHorarioActions';
import { parseCourses } from './utilities/parseCourses';




function App() {
 const [courses,stateMinMaxHour] = useHorarioActions();
const colorHoraryDispath = useContext(SetHoraryColorsContext);
  return <>
  <WeekCourses stateMinMaxHour={stateMinMaxHour} cursos={courses} />;
  <button onClick={()=>colorHoraryDispath({type:'RANDOM_COLOR'})}>RANDOM COLOR</button>
  </>
}

export default App;
