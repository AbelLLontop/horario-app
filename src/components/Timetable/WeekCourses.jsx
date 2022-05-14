import React, { useEffect } from 'react';
import styled from 'styled-components';
import DayCourses from './DayCourses';
const HorarioContent = styled.div`
  padding: 2rem;
`;

const WeekCoursesContent = styled.div`
  display: flex;
  position: relative;
  padding-left: 4rem;
  .lines {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(${(props) => props.lineAccount}, 3rem);
    z-index: -1;
  }
  .lines span { 
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    border: solid 1px #00000040;
    box-sizing: border-box;
    .hours {
      width: 4rem;
      text-align: center;
      font-weight: bold;
      font-family: calibri;
    }
  }
`;

const generateLinesHorizontal = ({ min, max }) => {
  const size = max - min;
  const lines = [];
  for (let i = 0; i < size; i++) {
    lines.push(
      <span key={i}>
        <div className="hours">
          {i + 7 < 10 ? 0 : ''}
          {i + min}-{i + min + 1 < 10 ? 0 : ''}
          {i + min + 1}
        </div>
      </span>
    );
  }
  return lines;
};

const WeekCourses = ({ cursos = [], stateMinMaxHour }) => {
  useEffect(() => {
    console.log('render del componente');
  });
  return (
    <HorarioContent>
      <WeekCoursesContent
        lineAccount={stateMinMaxHour.max - stateMinMaxHour.min}
      >
        <div className="lines">
          {generateLinesHorizontal({
            min: stateMinMaxHour.min,
            max: stateMinMaxHour.max,
          })}
        </div>
        {cursos.map((courseDay) => (
          <DayCourses
            day={courseDay.day}
            key={courseDay.day}
            cursos={courseDay.courses}
            min={stateMinMaxHour.min}
            max={stateMinMaxHour.max}
          />
        ))}
      </WeekCoursesContent>
    </HorarioContent>
  );
};

export default WeekCourses;
