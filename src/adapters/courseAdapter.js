export const courseAdapter = (course) => {
    const timeInteger = parseInt(course.time);
    return {
        id: course.id,
        code: course.codigo,
        type: course.type,
        name: course.name,
        group: course.group,
        teacher: course.proffesor,
        day: course.day,
        time: timeInteger,
        startTime: course.startTime,
        color:course.color || null
    };
}
