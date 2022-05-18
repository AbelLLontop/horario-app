import { DAYS } from './days';

export const separateCourseForDay = (cursos) => {
  let coursesFilteredForDay = {};
  cursos.forEach((curso) => {
    const color = curso.color;
    curso.horarios.forEach((horarioCurso) => {
      const dayUpperCase = horarioCurso.day.toLocaleUpperCase();
      coursesFilteredForDay[dayUpperCase] =
        coursesFilteredForDay[dayUpperCase] || [];
      coursesFilteredForDay[dayUpperCase].push({...horarioCurso,color:color});
    });
  });
  return coursesFilteredForDay;
};

export const extractMaxDayminMaxHour = (courses) => {
  let maxDay = 0;
  let minMaxHour = { min: 8, max: 18 };
  courses.forEach((curso) => {
    curso.horarios.forEach((horarioCurso) => {
      const dayUpperCase = horarioCurso.day.toLocaleUpperCase();
      minMaxHour = minMaxHourWeek(horarioCurso, minMaxHour);
      maxDay = getMaxDay(dayUpperCase, maxDay);
    });
  });

  return { maxDay, minMaxHour };
};

const minMaxHourWeek = (curso, minMaxHour) => {
  let max = minMaxHour.max;

  let min = minMaxHour.min;

  if (curso.startTime < min) {
    min = curso.startTime;
  }
  if (curso.startTime + curso.time > max) {
    max = curso.startTime + curso.time;
  }

  return { min, max };
};

const getMaxDay = (dayUpperCase, maxDay) => {
  const indexDay = DAYS.indexOf(dayUpperCase) + 1;

  if (indexDay > maxDay) {
    return indexDay;
  }
  return maxDay;
};
