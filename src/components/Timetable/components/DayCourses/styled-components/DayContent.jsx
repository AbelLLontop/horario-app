import styled from 'styled-components';

export const DayContent = styled.div`
flex-grow: 1;
flex-basis: 0;
position: relative;
box-sizing: border-box;
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