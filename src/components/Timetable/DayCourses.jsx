
import Course from "../Course/Course";
import { DayCoursesContent, Element } from "./DayCoursesContent";

import styled from 'styled-components';

const DayContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  &:before {
    content: '${(props) => props.day}';
    display: block;
    position: absolute;
    top: -25px;
    width: 100%;
    font-size: 17px;
    text-align: center;
    font-family: calibri;
  }
 
`


const generateLinesVertical= ({size}) => {
  const lines = [];
    for(let i = 0; i < size; i++){
     lines.push(<span key={i}></span>)
    }
    return lines;
  }


const DayCourses = ({cursos=[],day, min, max }) => {
    const {_numColumns,_cursosFiltrados} = cursos;

    return (
      <DayContent day={day}>
      <DayCoursesContent _numColumns={_numColumns} min={min} max={max}>
        <div className="linesV">
          {
            generateLinesVertical({size:_numColumns})
          }
        </div>
        {_cursosFiltrados?.map((course) => (
          <Element
            key={course.id}
            startTime={course.startTime}
            time={course.time}
            column={course.column}
            numColumns={_numColumns}
            stretch={course.stretch}
            min={min}
          >
           <Course course={course?.data} />
          </Element>
        ))}
      </DayCoursesContent>
      </DayContent>
    );

  };
  
 
  
  export default DayCourses;