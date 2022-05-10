
  
  export const weekFilter = (cursos) => {
    let weekCoursesFiltered = {};

    cursos.forEach((curso) => {
      weekCoursesFiltered[curso.day] = weekCoursesFiltered[curso.day] || [];
      weekCoursesFiltered[curso.day].push(curso);
    });
    return weekCoursesFiltered;
  };
  
  
  