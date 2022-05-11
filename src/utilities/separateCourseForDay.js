import { DAYS } from './days';

export const separateCourseForDay = (cursos) => {
  let coursesFilteredForDay = {};
  let maxDay = 0;
  let minMaxHour = {min:7, max:21};
  cursos.forEach((curso) => {
    minMaxHour = minMaxHourWeek(curso,minMaxHour);
   const dayUpperCase = curso.day.toLocaleUpperCase();
   coursesFilteredForDay[dayUpperCase] = coursesFilteredForDay[dayUpperCase] || [];
   coursesFilteredForDay[dayUpperCase].push(curso);
    maxDay = getMaxDay(dayUpperCase,maxDay);
  });

  return { coursesFilteredForDay, maxDay ,minMaxHour};
};

const minMaxHourWeek = (curso,minMaxHour) => {
  let max = minMaxHour.max;
  let min = minMaxHour.min;

    if (curso.startTime < min) {
      min = curso.startTime;
    }
    if (curso.startTime + curso.time > max) {
      max = curso.startTime + curso.time;
    }

  return { min,max };
}

const getMaxDay = (dayUpperCase, maxDay) => {
  const indexDay = DAYS.indexOf(dayUpperCase) + 1;
  
  if (indexDay > maxDay) {
    return indexDay;
  }
  return maxDay;
};
