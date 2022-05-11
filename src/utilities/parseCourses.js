import { separateCourseForDay } from './separateCourseForDay';
import { parseCoursesForPaint } from './ParseCoursesForPaint';
import { DAYS } from './days';


export const parseCourses = (courses) => {
  const {coursesFilteredForDay,maxDay,minMaxHour} = separateCourseForDay(courses);
  console.log(coursesFilteredForDay)
  let coursesFiltered = [];
  for (let i = 0; i < maxDay; i++) {
  
    let filterDay = {
      day: DAYS[i].charAt(0) + DAYS[i].toLowerCase().slice(1),
      courses: {_numColumns: 1, _cursosFiltrados:[]},
    };

    if(coursesFilteredForDay[DAYS[i]]){
      filterDay.courses = parseCoursesForPaint(coursesFilteredForDay[DAYS[i]]); 
    }
  
    coursesFiltered.push(filterDay);
  
  }

  return coursesFiltered;
};
