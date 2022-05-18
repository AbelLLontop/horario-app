import { CourseContent } from './styled-components/CourseContent';

const Course = ({ courseObject }) => {
  const { code, group, name, profesor, type, color } = courseObject;
  return (
    <CourseContent color={color}>
      <span className="nameCourse">{name}</span>
      <span className="nameTypeCourse">
        {type}-{group}
      </span>
      <span className="nameProffesor">{profesor}</span>
    </CourseContent>
  );
};

export default Course;
