import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogicComponent from './components/LogicComponent';
import RecentCitiesComponent from './components/RecentCitiesComponent';
import MainWeatherCard from './components/MainWeatherCard';
import SidebarNavbar from './components/SidebarNavbar';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';


function App () {
  return (
    <BrowserRouter>
      <Row>
        <HomeComponent />
        <SidebarNavbar />
      </Row>
    </BrowserRouter>
  );
}

export default App;
