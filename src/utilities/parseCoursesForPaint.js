const validateCollition = (startTime, time, course) => {
  let validate = false;
  const top = course.startTime;
  const bottom = course.startTime + course.time;
  const top2 = startTime;
  const bottom2 = startTime + time;

  let validate1 = top === top2 || bottom === bottom2;
  let validate2 = top > top2 && top < bottom2;
  let validate3 = bottom > top2 && bottom < bottom2;
  let validate4 = top < top2 && bottom > bottom2;

  if (validate1 || validate2 || validate3 || validate4) {
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

const validateStretch = (course, courses, courseCurrent = 0) => {
  let stretch = true;
  const { startTime, time } = course;
  for (let i = courseCurrent; i < courses.length; i++) {
    if (i != courseCurrent) {
      let course = courses[i];
      if (validateCollition(startTime, time, course)) {
        stretch = false;
        break;
      }
    }
  }
  return stretch;
};

const stretchCourses = (courses) => {
  for (let i = 0; i < courses.length; i++) {
    let course = courses[i];
    const stretch = validateStretch(course, courses, i);
    if (stretch) {
      course.stretch = true;
    }
  }
};

export const parseCoursesForPaint = (cursos) => {
  let columns = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };

  for (let i = 0; i < cursos.length; i++) {
    for (let j in columns) {
      if (!searchCollision(cursos[i].startTime, cursos[i].time, columns[j])) {
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

  stretchCourses(_cursosFiltrados);

  return { _numColumns, _cursosFiltrados };
};
