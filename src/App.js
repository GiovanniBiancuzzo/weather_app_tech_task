import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogicComponent from './components/LogicComponent';
import RecentCitiesComponent from './components/RecentCitiesComponent';
import MainWeatherCard from './components/MainWeatherCard';


function App () {
  return (
    <Row>
      <Col xs={12} md={6} lg={8}><MainWeatherCard /></Col>
      <RecentCitiesComponent />
    </Row>
  );
}

export default App;
