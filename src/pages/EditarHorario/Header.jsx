import React from 'react'
import styled from 'styled-components';
const HeaderContent = styled.div`
  display: flex;
  gap:2rem;
  .options{
    display: flex;
    align-items: center;
    gap:1rem;
  }
`
const Header = () => {
  return (
      <HeaderContent>
          <h1>Editar Horario</h1>
        <div className="options">
            <div>Guardar</div>
            <span>/</span>
            <div>Restaurar</div>
        </div>
      </HeaderContent>
  )
}

export default Header