import { weekFilter } from './parseCourseForDay';
import { parseCoursesForPaint } from './ParseCoursesForPaint';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'];

export const parseCourses = (courses) => {
  let weekFiltered = weekFilter(courses);
  let coursesFiltered = [];
  for (let i = 0; i < dias.length; i++) {
    let filterDay = {
      day: dias[i],
      courses: {_numColumns: 1, _cursosFiltrados:[]},
    };
    for (let day in weekFiltered) {
      if (day.toLocaleUpperCase() === dias[i].toLocaleUpperCase()) {
        filterDay.courses = parseCoursesForPaint(weekFiltered[day]);
      }
     
    }
    coursesFiltered.push(filterDay);
  }


  return coursesFiltered;
};
