import React from 'react';
import styled from 'styled-components';
import DayCourses from './DayCourses';
const HorarioContent = styled.div`
  padding: 2rem;

`

const WeekCoursesContent = styled.div`
  display: flex;
  position: relative;
  padding-left: 4rem;
  .lines{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(14,4rem);
    z-index: -1;
  }
  .lines span{
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    border:solid 1px #00000040;
    box-sizing: border-box;
    .hours{
      width: 4rem;
      text-align: center;
      font-weight: bold; 
      font-family: calibri;
    }
  }

`;
 
const Lines= () => {
const lines = [];
  for(let i = 0; i < 14; i++){
   lines.push(<span key={i}>
     <div className="hours">
     {i+7<10?0:''}{i+7}-{i+7+1<10?0:''}{i+7+1}
     </div>
     
     </span>)
  }
  return <>{lines}</>;

}

const WeekCourses = ({ cursos=[] }) => {
  return (
    <HorarioContent>
    <WeekCoursesContent>    
      <div className="lines">
            {<Lines/>}
        </div>  
        {
        cursos.map((courseDay) => (
            <DayCourses day={courseDay.day} key={courseDay.day} cursos={courseDay.courses} />
        ))}
     
    </WeekCoursesContent>
    </HorarioContent>

  );
};

export default WeekCourses;
