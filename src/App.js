import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarNavbar from './components/SidebarNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import FormSearch from './components/FormSearch';
import ButtonGeolocation from './components/ButtonGeolocation';
import { useMediaQuery } from 'react-responsive';
import FavouritesCitiesComponent from './components/FavouritesCitiesComponent';
import DashboardComponent from './components/DashboardComponent';

function App () {
  const isDesktopOrLaptop = useMediaQuery({
    query: process.env.REACT_APP_RES_TABLET,
  });

  // const isTabletOrMobile = useMediaQuery({ query: process.env.REACT_APP_RES_SMARTPHONE });

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          {//sopra i 768px tutte le routes portano alla home, non è un modo elegante di farlo, lo so 😅
            isDesktopOrLaptop ? (<Route path='*' element={<DashboardComponent />}>
            </Route>) : (<>
              <Route path='/' element={<HomeComponent />}>
              </Route>
              <Route path='/favourites' element={<FavouritesCitiesComponent />}>
              </Route>
              <Route path='/search' element={<FormSearch />}>
              </Route>
              <Route path='/geolocation' element={<ButtonGeolocation />}>
              </Route>
              <Route path='*' element={<HomeComponent />}>
              </Route>
            </>)}
        </Routes>
        {!isDesktopOrLaptop && <SidebarNavbar />}
        {
          //sidebar deve scomparire oltre i 768px
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
