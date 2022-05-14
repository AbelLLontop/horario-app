import { DAYS } from './days';
import { colorHEX } from './generatorColorRandom';

export const getGroupsWitchColorsRandom = (courses) => {
  const groups = {};
  courses.forEach(curso => {
    const codigo = curso.data.codigo;
    if (!groups[codigo]) {
      groups[codigo] = {
        // backgroundColor: colorHEX(),
          backgroundColor: '#e4e4e4',
        color:'black'
        
      };
    }
  })
  return groups;
}


export const separateCourseForDay = (cursos) => {
  let coursesFilteredForDay = {};
  cursos.forEach((curso) => {
   const dayUpperCase = curso.day.toLocaleUpperCase();
   coursesFilteredForDay[dayUpperCase] = coursesFilteredForDay[dayUpperCase] || [];
   coursesFilteredForDay[dayUpperCase].push(curso);
  });
  return coursesFilteredForDay;
};

export const extractMaxDayminMaxHour = (courses) => {
  let maxDay = 0;
  let minMaxHour = {min:8, max:18};
  courses.forEach((curso) => {
    const dayUpperCase = curso.day.toLocaleUpperCase();
    minMaxHour = minMaxHourWeek(curso,minMaxHour);
    maxDay = getMaxDay(dayUpperCase,maxDay);
  });

  return {maxDay ,minMaxHour};
}

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
