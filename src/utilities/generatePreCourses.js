import { colorHEX } from "./generatorColorRandom";

export const generatePreCourses = (courses) => {
    const nameCourses = new Set();

    courses.forEach(course => {
        nameCourses.add(course.name);
    }
    ); 
    
    const coursesPre = new Map();
    courses.forEach(course => {
        if(!coursesPre.get(course.code)){
            coursesPre.set(course.code, {
                code: course.code,
                name: course.name,
                color: course.color || colorHEX(),
                // color: course.color || '#e4e4e4',
                horarios: []      
            })
        }
        coursesPre.get(course.code).horarios.push(course)
    });
    return coursesPre;

}