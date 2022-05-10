import React, { useEffect, useState } from 'react'
import { parseCoursesForPaint } from '../utilities/ParseCoursesForPaint';

const useparseCoursesForPaint = (cursos) => {
    const [cursosFiltrados, setCursosFiltrados] = useState([]);
    const [numColumns, setNumColumns] = useState(1);
  
    useEffect(() => {
      const { _numColumns, _cursosFiltrados } = parseCoursesForPaint(cursos);
      setNumColumns(_numColumns);
      setCursosFiltrados(_cursosFiltrados);
    }, []);
  return [cursosFiltrados, numColumns ];	
}

export default useparseCoursesForPaint