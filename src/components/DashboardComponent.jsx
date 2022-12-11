import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import ButtonGeolocation from './Modules/ButtonGeolocation';
import FavouritesCitiesComponent from './FavouritesPage/FavouritesCitiesComponent';
import SearchComponent from './SearchPage/SearchComponent';
import HomeComponent from './HomePage/HomeComponent';
import CookieToastComponent from './Modules/CookieToastComponent';

const DashboardComponent = () => {
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    return (
        <>
            <Row>
                <HomeComponent />
                {!isTabletOrMobile && ( //mostra le città preferite, la search bar e il pulsante della geolocalizzazione solo quando siamo sopra i 768px
                    <Col lg={4}>
                        <FavouritesCitiesComponent />
                        <SearchComponent />
                        <ButtonGeolocation />
                    </Col>
                )}
            </Row>

            <CookieToastComponent />
        </>
    );
};

export default DashboardComponent;
