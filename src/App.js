import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import LogicComponent from './components/LogicComponent';
import RecentCitiesComponent from './components/RecentCitiesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainWeatherCard from './components/MainWeatherCard';

function App () {
  return (
    <Container >
      <MainWeatherCard />
    </Container>
  );
}

export default App;
