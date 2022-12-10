import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import ButtonGeolocation from './ButtonGeolocation';
import FavouritesCitiesComponent from './FavouritesCitiesComponent';
import FormSearch from './FormSearch';
import HomeComponent from './HomeComponent';
import CookieToastComponent from './CookieToastComponent';

const DashboardComponent = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: process.env.REACT_APP_RES_TABLET,
    });

    return (
        <>
            <Row>
                <HomeComponent />
                <Col lg={4}>
                    {isDesktopOrLaptop && ( //mostra le città preferite, solo quando siamo sopra i 768px o siamo sotto i 768px con variabile show false
                        <FavouritesCitiesComponent />
                    )}
                    {isDesktopOrLaptop && ( //mostra la la search bar e il pulsante della geolocalizzazione, solo quando siamo sopra i 768px
                        <>
                            <FormSearch />
                            <ButtonGeolocation />
                        </>
                    )}
                </Col>
            </Row>

            <CookieToastComponent />
        </>
    );
};

export default DashboardComponent;
