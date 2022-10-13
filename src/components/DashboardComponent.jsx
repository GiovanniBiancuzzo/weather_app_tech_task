import { Col, Row, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { acceptedCookiesAction } from "../redux/actions";
import ButtonGeolocation from "./ButtonGeolocation";
import FavouritesCitiesComponent from "./FavouritesCitiesComponent";
import FormSearch from "./FormSearch";
import { BiCookie } from "react-icons/bi";
import HomeComponent from "./HomeComponent";

const DashboardComponent = () => {
    const cookies = useSelector((state) => state.favourites.cookies); //variabile per i cookies conservata nello store persistente

    const dispatch = useDispatch();

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

            <Toast //piccolo banner che avvisa della localizzazione tramite ip
                onClose={() => dispatch(acceptedCookiesAction())}
                show={cookies}
                className="bannerCookies "
            >
                <Toast.Header>
                    <span>
                        <BiCookie />
                    </span>
                    <strong className="mr-auto">Weather App</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>
                    L'app usa una localizzazione approssimativa per stimare la
                    tua posizione
                </Toast.Body>
            </Toast>
        </>
    );
};

export default DashboardComponent;
