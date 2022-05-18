
import styled from 'styled-components';
import { sizeRow } from '../../../config/const-styles';
export const WeekCoursesContent = styled.div`
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
    grid-template-rows: repeat(${(props) => props.lineAccount}, ${sizeRow});
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
