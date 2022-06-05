import React from 'react';
import CheckIcon from './icons/CheckIcon';
import CodeIcon from './icons/CodeIcon';
import EditIcon from './icons/EditIcon';
import SliderContent from './styled-components/SliderContent';

const Slider = () => {
  return (
    <SliderContent>
      <header>
        Generador de <div>Horarios UNS</div>
      </header>
      <nav>
        <header>Secctions</header>
        <ul>
          <li>
            <a className="itemNav" href="#">
              <CodeIcon />
              Horario
            </a>
          </li>
          <li>
            <a className="itemNav select" href="#">
              <EditIcon />
              Editar Colores
            </a>
            <ul className="options">
              <li>
                <a className="itemOption" href="#">
                  <CheckIcon />
                  Colores
                </a>
              </li>
              <li>
                <a className="itemOption" href="#">
                  Seleccion
                </a>
              </li>
              <li>
                <a className="itemOption" href="#">
                  Random
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </SliderContent>
  );
};

export default Slider;
