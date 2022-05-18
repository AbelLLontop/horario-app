import styled from 'styled-components';

export const CourseContent = styled.div`
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
  border-radius: 4px;
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