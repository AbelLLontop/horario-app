import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { HoraryColorsContext } from '../../contexts/HoraryContext';

const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 100%;
  background-color: ${(props) => props.color};
  transition: all 0.2s ease;
  //borders
  /* border-left:solid 2px black;
  border-top:solid 2px black;
  border-bottom:solid 1px black; */

  //shadow effects
  /* box-shadow: 0px 0px 11px 0px ${(props) => props.color};
  border-radius: 6px;
  box-sizing: border-box;
  opacity: 0.9;
  color: black; */

  line-height: 16px;
  .nameCourse {
    font-size: 16px;
    padding: 0;
    font-weight: bold;
    margin: 0;
    max-width: 98%;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }
  .nameTypeCourse {
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
  }
  .nameProffesor {
    font-size: 10px;
    text-align: center;
  }
 
`;

const Course = ({ course }) => {
  const { codigo, group, name, profesor, type } = course;
  const { colorHorary } = useContext(HoraryColorsContext);
  const colorH = `${colorHorary[codigo].backgroundColor}`;
  return (
    <CourseContent color={colorH} >
      <span className="nameCourse">{name}</span>
      <span className="nameTypeCourse">
        {type}-{group}
      </span>
    <span className="nameProffesor">{profesor}</span>
    
    </CourseContent>
  );
};

export default Course;
