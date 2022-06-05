import React from 'react';
import styled from 'styled-components';

const SettingsColoresContent = styled.div`
    display: flex;
    .cursos{
       display:flex; 
    }
`

const SettingsColores = () => {
  return (
    <SettingsColoresContent>
        <section>
        <header>Seleccionar Curso</header>
        <p>Seleccione en el horario los cursos que va a a llevar</p>
        <p>Click para seleccionar y otro para deseleccionar</p>
        </section>
        <section className='cursos'>
            <article>
                <header>Curso1</header>
                <div className="grupos">
                    <div>Grupo A</div>
                    <div>Grupo B</div>
                    <div>Teoria 1</div>
                </div>
               
            </article>
            <article>
                <header>Curso2</header>
                <div className="grupos">
                    <div>Grupo A</div>
                    <div>Grupo B</div>
                    <div>Teoria 1</div>
                </div>
               
            </article>
            <article>
                <header>Curso3</header>
                <div className="grupos">
                    <div>Grupo A</div>
                    <div>Grupo B</div>
                    <div>Teoria 1</div>
                </div>
               
            </article>
        </section>
    </SettingsColoresContent>
  )
}

export default SettingsColores