import { generateLinesHorizontal } from '../../utils/generateLines';
import DayCourses from '../DayCourses';
import { WeekCoursesContent } from './styled-components/WeekCoursesContent';

const WeekCourses = ({ cursos = [], stateMinMaxHour }) => {
  return (
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
  );
};

export default WeekCourses;
