
import useparseCoursesForPaint from "../../hooks/useparseCoursesForPaint";
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

const DayCourses = ({cursos=[],day}) => {
    const {_numColumns,_cursosFiltrados} = cursos;

    return (
      <DayContent day={day}>
      <DayCoursesContent _numColumns={_numColumns}>
        <div className="linesV">
          <span></span>
          <span></span>
        </div>
        {_cursosFiltrados?.map((course) => (
          <Element
            key={course.id}
            startTime={course.startTime}
            time={course.time}
            column={course.column}
            numColumns={_numColumns}
            stretch={course.stretch}
          >
           <Course course={course} />
          </Element>
        ))}
      </DayCoursesContent>
  
      </DayContent>
    );
  };
  
 
  
  export default DayCourses;