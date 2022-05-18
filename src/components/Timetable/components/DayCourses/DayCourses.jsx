import Course from '../../../Course';
import { generateLinesVertical } from '../../utils/generateLines';
import { DayContent } from './styled-components/DayContent';
import {
  DayCoursesContent,
  Element,
} from './styled-components/DayCoursesContent';

const DayCourses = ({ cursos = [], day, min, max }) => {
  const { _numColumns, _cursosFiltrados } = cursos;

  return (
    <DayContent day={day}>
      <DayCoursesContent _numColumns={_numColumns} min={min} max={max}>
        <div className="linesV">
          {generateLinesVertical({ size: _numColumns })}
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
            <Course courseObject={course} />
          </Element>
        ))}
      </DayCoursesContent>
    </DayContent>
  );
};

export default DayCourses;
