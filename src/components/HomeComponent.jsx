import { useEffect, useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { acceptedCookiesAction, getGeolocationAction } from "../redux/actions";
import ButtonGeolocation from "./ButtonGeolocation";
import FavouritesCitiesComponent from "./FavouritesCitiesComponent";
import FormSearch from "./FormSearch";
import MainWeatherCard from "./MainWeatherCard";
import ThisWeekMonthComponent from "./ThisWeekMonthComponent";
import TodayComponent from "./TodayComponent";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const HomeComponent = () => {
    const actualCity = useSelector((state) => state.weatherInfos.actualCity); //variabile per il recupero della città attuale
    const loading = useSelector((state) => state.weatherInfos.loading); //variabile per i caricamenti conservata nello store
    const error = useSelector((state) => state.weatherInfos.error);
    const cookies = useSelector((state) => state.favourites.cookies); //variabile per i cookies conservata nello store persistente
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search).get("q");

    const dispatch = useDispatch();

    const fetchDefaultCity = () => {
        //geolocalizzazione approssimativa di default tramite ip, servizio di absractapi
        fetch(
            `https://ipgeolocation.abstractapi.com/v1/?api_key=2a8f6ad0cdf04576970f8073ad82e77e`
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch(getGeolocationAction(data.latitude, data.longitude));
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        //al caricamento dei componenti geolocalizzo approssimativamente tramite ip, una città e la setto di default

        // if (defaultCity) {
        //     dispatch(getActualWeatherAction(defaultCity));
        // }
        // else {
        // }
        if (params === "searched") {
            setShow(true);
            location.pathname = "/";
        } else {
            showHome();
            fetchDefaultCity();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //todo: introdurre una gestione degli errori di caricamento e dei loading

    const isDesktopOrLaptop = useMediaQuery({
        query: process.env.REACT_APP_RES_TABLET,
    });

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    const [show, setShow] = useState(false); //da usare al click della città per passare alla visualizzazione delle informazioni
    const showHome = () => {
        setShow(!show);
    };

    // useEffect(() => {
    //     if (params === "searched") {
    //         setShow(true);
    //         location.pathname = "/";
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    return (
        <>
            <Row className={isTabletOrMobile && show ? "mainGradient" : ""}>
                {isTabletOrMobile && ( //mostra pulsanti indietro e home, solo quando siamo sotto i 768px e quando la variabile show è true
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: 900,
                            padding: "24px",
                        }}
                    >
                        <BsArrowLeft
                            style={{
                                cursor: "pointer",
                                fontSize: "1.3em",
                            }}
                            onClick={showHome}
                        />

                        <BsSearch
                            style={{
                                cursor: "pointer",
                                fontSize: "1.3em",
                            }}
                            onClick={() => navigate("/search")}
                        />
                    </div>
                )}
                {(isDesktopOrLaptop || show) && ( //mostra la home, solo quando siamo sopra i 768px o quando la variabile show è true
                    <Col lg={8}>
                        <Row style={{ justifyContent: "center" }}>
                            {!loading ? (
                                <>
                                    <Col xs={11} md={12}>
                                        <MainWeatherCard
                                            actualCity={actualCity}
                                        />
                                    </Col>
                                    <Col xs={11} md={5}>
                                        <TodayComponent
                                            actualCity={actualCity}
                                        />
                                    </Col>
                                    <Col xs={11} md={7}>
                                        <ThisWeekMonthComponent
                                            actualCity={actualCity}
                                        />
                                    </Col>
                                </>
                            ) : (
                                <div style={{ paddingTop: "20vh" }}>
                                    <div className="loader loader3">
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Row>
                    </Col>
                )}
                <Col
                    lg={4}
                    style={isTabletOrMobile ? { backgroundColor: "#fff" } : {}} //!controlla per background bianco
                >
                    {(isDesktopOrLaptop || (isTabletOrMobile && !show)) &&
                        !loading && ( //mostra le città preferite, solo quando siamo sopra i 768px o siamo sotto i 768px con variabile show false
                            <>
                                {isTabletOrMobile && (
                                    <h2
                                        className="titles"
                                        style={{
                                            textAlign: "center",
                                            color: "#01175f",
                                        }}
                                    >
                                        Good morning!
                                        <p>Giovanni</p>
                                    </h2>
                                )}
                                <FavouritesCitiesComponent
                                    showHome={showHome}
                                />
                            </>
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

export default HomeComponent;
