import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarNavbar from './components/Navigation/SidebarNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomePage/HomeComponent';
import SearchComponent from './components/SearchPage/SearchComponent';
import ButtonGeolocation from './components/Modules/ButtonGeolocation';
import { useMediaQuery } from 'react-responsive';
import FavouritesCitiesComponent from './components/FavouritesPage/FavouritesCitiesComponent';
import DashboardComponent from './components/DashboardComponent';

function App () {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    {//sopra i 768px tutte le routes portano alla home, non รจ un modo elegante di farlo, lo so ๐
                        !isTabletOrMobile ? (<Route path='*' element={<DashboardComponent />}>
                        </Route>) : (<>
                            <Route path='/' element={<HomeComponent />}>
                            </Route>
                            <Route path='/favourites' element={<FavouritesCitiesComponent />}>
                            </Route>
                            <Route path='/search' element={<SearchComponent />}>
                            </Route>
                            <Route path='/geolocation' element={<ButtonGeolocation />}>
                            </Route>
                            <Route path='*' element={<HomeComponent />}>
                            </Route>
                        </>)}
                </Routes>
                {isTabletOrMobile && <SidebarNavbar />}
            </BrowserRouter>
        </div>
    );
}

export default App;
