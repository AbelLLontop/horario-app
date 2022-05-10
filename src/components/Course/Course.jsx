import React from 'react'
import styled from 'styled-components';
import { colorHEX } from '../../utilities/generatorColorRandom';

const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-left:solid 2px black;
  border-top:solid 2px black;
  border-bottom:solid 1px black;
  box-sizing: border-box;
  opacity: .9;
  line-height: 16px;
  .nameCourse{
    font-weight: bold;
    font-size: 18px;
    padding: 0;
    margin: 0;
  }
  .nameTypeCourse{
    text-transform: lowercase;
    

  }
  .nameProffesor{
    font-style: italic;
  }

`

const Course = ({course}) => {
    const {name} = course;
    const colorH = colorHEX();
  return (
    <CourseContent color={colorH}>
        <span className='nameCourse'>
        {name}
        </span>
        <span className='nameTypeCourse'>
        Teori1
        </span>
        <span className='nameProffesor'>
        Profesor
        </span>
    </CourseContent>
  )
}

export default Course