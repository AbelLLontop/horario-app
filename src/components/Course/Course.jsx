import { CourseContent } from './styled-components/CourseContent';

const Course = ({ courseObject }) => {
  const { code, group, name, teacher, type, color } = courseObject;
  console.log(courseObject)
  return (
    <CourseContent color={color}>
      <span className="nameCourse">{name}</span>
      <span className="nameTypeCourse">
        {type}-{group}
      </span>
      <span className="nameProffesor">{teacher}</span>
    </CourseContent>
  );
};

export default Course;
