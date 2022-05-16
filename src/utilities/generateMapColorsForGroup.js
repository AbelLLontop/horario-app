
function ColorGroup(background,color){
  this.background = background
  this.color = color;
}

export const generateMapColorsForGroup = (courses) => {
  const colorsGroup = new Map();
  courses.forEach((course) => {
    const {codigo} = course.data;
    if (!colorsGroup.has(codigo)) {
      colorsGroup.set(codigo, new ColorGroup('#e4e4e4', 'black'));
    }
  });
  return colorsGroup;
};
