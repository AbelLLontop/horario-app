import {extractMaxDayminMaxHour,getGroupsWitchColorsRandom,separateCourseForDay} from './separateCourseForDay';
import { parseCoursesForPaint } from './parseCoursesForPaint';

import { DAYS } from './days';

export const parseCourses = (courses) => {
  console.log(courses)
  const coursesFilteredForDay = separateCourseForDay(courses);
  const { maxDay,minMaxHour } = extractMaxDayminMaxHour(courses);
  const groupsWitchColors = getGroupsWitchColorsRandom(courses);
  let coursesFiltered = [];
  for (let i = 0; i < maxDay; i++) {
    let filterDay = {
      day: DAYS[i].charAt(0) + DAYS[i].toLowerCase().slice(1),
      courses: { _numColumns: 1, _cursosFiltrados: [] },
    };

    if (coursesFilteredForDay[DAYS[i]]) {
      filterDay.courses = parseCoursesForPaint(coursesFilteredForDay[DAYS[i]]);
    }
    coursesFiltered.push(filterDay);
  }
  return {coursesFiltered,groupsWitchColors,minMaxHour};
};
