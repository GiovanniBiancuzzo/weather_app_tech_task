import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import LogicComponent from './components/LogicComponent';
import RecentCitiesComponent from './components/RecentCitiesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarNavbar from './components/SidebarNavbar';

function App () {
  return (
    <Container >
      {/* <Row>
        <Col ><LogicComponent /></Col>
        <RecentCitiesComponent />
      </Row> */}
      <Row>
        <Col xs={12} md={8}><LogicComponent /></Col>
        <Col xs={12} md={4}><SidebarNavbar /></Col>
      </Row>
    </Container>
  );
}

export default App;
