import { useEffect, useState } from 'react';
import styled from 'styled-components';

const cursos = [
  {
    id: 1,
    name: 'Curso 1',
    startTime: 1,
    time: 1,
  },
  {
    id: 2,
    name: 'Curso 2',
    startTime: 7,
    time: 1,
  },
  {
    id: 3,
    name: 'Curso 3',
    startTime: 1,
    time: 4,
  },
  {
    id: 4,
    name: 'Curso 4',
    startTime: 3,
    time: 4,
  }
  ,
  {
    id: 5,
    name: 'Curso 5',
    startTime: 3,
    time: 4,
  }
];
console.log(cursos)

cursos.sort((a, b) => {
  if (a.startTime > b.startTime) {
    return 1;
  }
  if (a.startTime < b.startTime) {
    return -1;
  }
  return 0;
});
console.log(cursos)
const searchCollision = (startTime, time, courses) => {
  let collision = false;

  for (let i = 0; i < courses.length; i++) {
    let course = courses[i];
    if (
      course.startTime === startTime ||
      course.startTime + course.time === startTime + time
    ) {
      collision = true;

      break;
    }
    if (course.startTime > startTime && course.startTime < startTime + time) {
      collision = true;


      break;
    }
    if (
      course.startTime + course.time > startTime &&
      course.startTime + course.time < startTime + time
    ) {
      collision = true;


      break;
    }
    if (
      course.startTime < startTime &&
      course.startTime + course.time > startTime + time
    ) {
      collision = true;


      break;
    }
  }


  return collision;
};
const searchCollision2 = (startTime, time, courses,courseCurrent=0) => {
  let collision = false;
  let coll = null;

  for (let i = courseCurrent; i < courses.length; i++) {
    if(i != courseCurrent){
   
    let course = courses[i];
    if (
      course.startTime === startTime ||
      course.startTime + course.time === startTime + time
    ) {
      collision = true;
      coll = course;
      break;
    }
    if (course.startTime > startTime && course.startTime < startTime + time) {
      collision = true;
      coll = course;

      break;
    }
    if (
      course.startTime + course.time > startTime &&
      course.startTime + course.time < startTime + time
    ) {
      collision = true;
      coll = course;

      break;
    }
    if (
      course.startTime < startTime &&
      course.startTime + course.time > startTime + time
    ) {
      collision = true;
      coll = course;

      break;
    }
  }
  }

  console.log(courses[courseCurrent]?.name+"colisiono con "+coll?.name);
  return collision;
};

const seatchCollisionInColumn = (curso, column) => {
  let collision = false;

    if (searchCollision(curso.startTime, curso.time, column)) {
      collision = true;
    }

  return collision;
};

const assignCourseInColumns = () => {
  let columns = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (let i = 0; i < cursos.length; i++) {
    for (let j in columns) {
      if (!seatchCollisionInColumn(cursos[i], columns[j])) {
        columns[j].push({...cursos[i], column: j});
        break;
      }
    }
  }
  console.log(columns);
  let _cursosFiltrados = [];
  let _numColumns = 0;
  for (let j in columns) {
    if(columns[j].length > 0){
      _numColumns++;
      _cursosFiltrados.push(...columns[j]);
    }
  }


  for (let i = 0; i < _cursosFiltrados.length; i++) {
    let course = _cursosFiltrados[i];
    const collision = searchCollision2(course.startTime,course.time,_cursosFiltrados,i);
    if (collision) {
      console.log(course.name + ' colisiona ');
    } else {
      course.stretch =true;
      console.log(course.name + ' no colisiona');
    }
  }



  return {_numColumns, _cursosFiltrados};
};




const TablaGrid = () => {
  const [cursosFiltrados, setCursosFiltrados] = useState([]);
  const [numColumns, setNumColumns] = useState(1);
  
  useEffect(()=>{
    const {_numColumns, _cursosFiltrados} = assignCourseInColumns();
    setNumColumns(_numColumns);
    setCursosFiltrados(_cursosFiltrados);
    console.log(_cursosFiltrados);
},[]);
  return (
    <TablaContent>
      {cursosFiltrados?.map((course) => (
        <Element
          key={course.id}
          startTime={course.startTime}
          time={course.time}
          column={course.column}
          numColumns={numColumns}
          stretch={course.stretch}
        >
          <h1>{course.name}</h1>
        </Element>
      ))}
    </TablaContent>
  );
};

const TablaContent = styled.div`
  border: solid 4px red;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(7, 8rem);
`;
const Element = styled.div`
  border: dashed 4px blue;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: calibri;
  width: 100%;
  height: 100%;
  ${props => (props.stretch&&props.column!=props.numColumns)&&(`grid-column:  ${props.column!=1?'span':''} ${props.column} / span ${props.numColumns}`)};

  grid-row: ${(props) => props.startTime} / span ${(props) => props.time};
  h1 {
    font-weight: normal;
  }
`;

function App() {
  return <TablaGrid />;
}

export default App;
