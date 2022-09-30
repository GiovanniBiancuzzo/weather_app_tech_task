import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import LogicComponent from './components/LogicComponent';
import RecentCitiesComponent from './components/RecentCitiesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <Container >
      <Row>
        <Col ><LogicComponent /></Col>
        <Col>  <RecentCitiesComponent /></Col>
      </Row>
    </Container>
  );
}

export default App;
