import { colorHEX } from "../utilities/generatorColorRandom";

const initialColorsHorary ={
  'a':{
    backgroundColor: '#ff0000',
    color: '#ffffff',
  }
};


const initialHorary = {
  heightCourse: '4rem',
  firstHour: '7',
  lastHour: '22',

  courses: [
    {
      id: 1,
      startTime: 7,
      time: 1,
      day: 'lunes',
      show: true,
      data: {
        name: 'Curso 1',
        codigo: 'U',
        profesor: 'Profesor 1',
        type: 'Laboratorio',
        group: 'Grupo 1',
      },
    },
    {
      id: 2,
      startTime: 7,
      time: 1,
      day: 'martes',
      show: true,
      data: {
        name: 'Curso 1',
        codigo: 'B',
        profesor: 'Profesor 1',
        type: 'Laboratorio',
        group: 'Grupo 1',
      },
    },
    {
      id: 3,
      startTime: 7,
      time: 1,
      day: 'miercoles',
      show: true,
      data: {
        name: 'Curso 1',
        codigo: 'C',
        profesor: 'Profesor 1',
        type: 'Laboratorio',
        group: 'Grupo 1',
      },
    },
    {
      id: 4,
      startTime: 7,
      time: 1,
      day: 'jueves',
      show: true,
      data: {
        name: 'Curso 1',
        codigo: 'D',
        profesor: 'Profesor 1',
        type: 'Laboratorio',
        group: 'Grupo 1',
      },
    },
    {
      id: 5,
      startTime: 7,
      time: 1,
      day: 'viernes',
      show: true,
      data: {
        name: 'Curso 1',
        codigo: 'A',
        profesor: 'Profesor 1',
        type: 'Laboratorio',
        group: 'Grupo 1',
      },
    },
  ],
};



const generateRadomColor=(colors)=>{
  const retornoColor = {};
  for(let i in colors){
      retornoColor[i]= {backgroundColor: colorHEX(), color: 'black'}
  }
  return  {...retornoColor};
}

const horarioColorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        [action.payload.codigo]: action.payload,
      };
    case 'SET_COLOR_ALL':
      return {
        ...action.payload
      };
    case 'RANDOM_COLOR':
      return {
      ...generateRadomColor(state)
      };
    default:
      return new Error('Error');
  }
}


const horaryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIRST_HOUR':
      return {
        ...state,
        firstHour: action.payload,
      };
    case 'SET_LAST_HOUR':
      return {
        ...state,
        lastHour: action.payload,
      };
    case 'SET_ALL_COURSES':
      return{
        ...state,
        courses: action.payload,
      };
    case 'SET_HEIGHT_COURSE':
      return {
        ...state,
        heightCourse: action.payload,
      };
    default:
      return new Error('Error');
  }
}
export {horarioColorReducer,initialColorsHorary };

export { horaryReducer,initialHorary};