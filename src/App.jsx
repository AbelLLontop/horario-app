import Slider from './components/Slider/Slider';
import CopyCodePage from './pages/CopyCode';
import styled from 'styled-components';
import ColoresPage from './pages/EditarHorario/Colores/ColoresPage';
const AppContent = styled.div`
  font-family: 'Poppins', sans-serif;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  display: flex;
`;

function App() {
  return (
    <AppContent>
      <Slider />
      <ColoresPage />
    </AppContent>
  );
}

export default App;
