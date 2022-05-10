
  
  //solo ordena los cursos respecto a su hora de entrada
  // cursos.sort((a, b) => {
  //   if (a.startTime > b.startTime) {
  //     return 1;
  //   }
  //   if (a.startTime < b.startTime) {
  //     return -1;
  //   }
  //   return 0;
  // });
  
  const validateCollition = (startTime, time, course) => {
    let validate = false;
    if (
      course.startTime === startTime ||
      course.startTime + course.time === startTime + time
    ) {
      validate = true;
    }
    if (course.startTime > startTime && course.startTime < startTime + time) {
      validate = true;
    }
    if (
      course.startTime + course.time > startTime &&
      course.startTime + course.time < startTime + time
    ) {
      validate = true;
    }
    if (
      course.startTime < startTime &&
      course.startTime + course.time > startTime + time
    ) {
      validate = true;
    }
    return validate;
  };
  
  const searchCollision = (startTime, time, courses) => {
    let collision = false;
  
    for (let i = 0; i < courses.length; i++) {
      let course = courses[i];
      if (validateCollition(startTime, time, course)) {
        collision = true;
        break;
      }
    }
    return collision;
  };
  const searchCollision2 = (startTime, time, courses, courseCurrent = 0) => {
    let collision = false;
    let coll = null;
    for (let i = courseCurrent; i < courses.length; i++) {
      if (i != courseCurrent) {
        let course = courses[i];
        if (validateCollition(startTime, time, course)) {
          collision = true;
          coll = course;
          break;
        }
      }
    }
    return collision;
  };
  
  
  
  export const parseCoursesForPaint = (cursos) => {
    let columns = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    for (let i = 0; i < cursos.length; i++) {
      for (let j in columns) {
        if (!searchCollision(cursos[i].startTime,cursos[i].time, columns[j])) {
          columns[j].push({ ...cursos[i], column: j });
          break;
        }
      }
    }
  
    let _cursosFiltrados = [];
    let _numColumns = 0;
    for (let j in columns) {
      if (columns[j].length > 0) {
        _numColumns++;
        _cursosFiltrados.push(...columns[j]);
      }
    }
  
    for (let i = 0; i < _cursosFiltrados.length; i++) {
      let course = _cursosFiltrados[i];
      const collision = searchCollision2(
        course.startTime,
        course.time,
        _cursosFiltrados,
        i
      );
      if (!collision) {
        course.stretch = true;
      }
    }
  
    return { _numColumns, _cursosFiltrados };
  };