import { useEffect, useState } from "react";
import useHorarioActions from "../../hooks/useHorarioActions";
import { parseCourses } from "../../utilities/parseCourses";
import WeekCourses from "./components/WeekCourses";
import { HorarioContent } from "./styled-components/HorarioContent";


const TimeTable = () => {
  const [preProcessContext] = useHorarioActions();
  const [postProcessCourses, setPostProcessCourses] = useState([]);
  const [minMaxHour, setMinMaxHour] = useState({min: 7, max: 20});
  useEffect(() => {
    const { coursesFiltered, minMaxHour } = parseCourses(preProcessContext);
    setPostProcessCourses(coursesFiltered);
    setMinMaxHour(minMaxHour);
    
  }, [preProcessContext]);

  useEffect(() => {}, [postProcessCourses]);

  return (
    <HorarioContent>
      <WeekCourses
        stateMinMaxHour={minMaxHour}
        cursos={postProcessCourses}
      />
    </HorarioContent>
  );
};

export default TimeTable;
