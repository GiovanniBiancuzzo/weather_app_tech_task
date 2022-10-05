import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarNavbar from './components/SidebarNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';


function App () {
  return (
    <BrowserRouter>
      <Row>
        <Routes>
          <Route path='/' element={<HomeComponent />}>
          </Route>
        </Routes>
        <SidebarNavbar />
      </Row>
    </BrowserRouter>
  );
}

export default App;
