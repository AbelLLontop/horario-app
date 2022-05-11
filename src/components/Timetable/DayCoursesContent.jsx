import styled from 'styled-components';

export const DayCoursesContent = styled.div`
flex-grow: 1;

box-sizing: border-box;
display: grid;
grid-template-rows: repeat(14,4rem);
box-sizing: border-box;
position: relative;
.linesV{
  position: absolute;
    display: grid;
    grid-template-columns:repeat(${(props) => props._numColumns}, 1fr);
    left: 0;
    top: 0;
    height: 100%;
    grid-template-rows: 1fr;
    width: 100%;
    /* border-left: solid 2px #181818; */
    box-sizing: border-box;
}
.linesV span{
  width: 100%;
    height: 100%;
    border: solid 1px #00000026;
    display: block;
    box-sizing: border-box;
    z-index: -1;
}


`;
export const Element = styled.div`
box-sizing: border-box;
font-family: calibri;
width: 100%;
height: 100%;
${(props) =>
  props.stretch &&
  props.column != props.numColumns &&
  `grid-column:  ${props.column != 1 ? 'span' : ''} ${props.column} / span ${
    props.numColumns
  }`};

grid-row: ${(props) => props.startTime-6} / span ${(props) => props.time};
h1 {
  font-weight: normal;
}
`;