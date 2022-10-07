import { Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarNavbar from './components/SidebarNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import FormSearch from './components/FormSearch';
import ButtonGeolocation from './components/ButtonGeolocation';


function App () {
  return (
    <BrowserRouter>
      <Row>
        <Routes>
          <Route path='/' element={<HomeComponent />}>
          </Route>
          <Route path='/search' element={<FormSearch />}>
          </Route>
          <Route path='/geolocation' element={<ButtonGeolocation />}>
          </Route>
        </Routes>
        <SidebarNavbar />
      </Row>
    </BrowserRouter>
  );
}

export default App;
