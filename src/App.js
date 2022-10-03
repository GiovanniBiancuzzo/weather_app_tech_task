import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogicComponent from './components/LogicComponent';
import RecentCitiesComponent from './components/RecentCitiesComponent';
import MainWeatherCard from './components/MainWeatherCard';
import SidebarNavbar from './components/SidebarNavbar';


function App () {
  return (
    <Row>
      <Col xs={12} md={6} lg={9}><MainWeatherCard /></Col>
      <SidebarNavbar />
    </Row>
  );
}

export default App;
