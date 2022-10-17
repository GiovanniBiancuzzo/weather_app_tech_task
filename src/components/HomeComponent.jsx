import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getGeolocationAction } from "../redux/actions";
import MainWeatherCard from "./MainWeatherCard";
import ThisWeekMonthComponent from "./ThisWeekMonthComponent";
import TodayComponent from "./TodayComponent";
import { useLocation } from "react-router-dom";
import MiniTopNavbar from "./MiniTopNavbar";
import switchGradient from "../functions/switchGradient";

const HomeComponent = () => {
    const actualCity = useSelector((state) => state.weatherInfos.actualCity); //variabile per il recupero della città attuale
    const loading = useSelector((state) => state.weatherInfos.loading); //variabile per i caricamenti conservata nello store

    const location = useLocation();
    const dispatch = useDispatch();

    const fetchDefaultCity = () => {
        //geolocalizzazione approssimativa di default tramite ip, servizio di absractapi
        fetch(
            `${process.env.REACT_APP_ABSTRACT_GEOLOCATION_API}api_key=${process.env.REACT_APP_ABSTRACT_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) =>
                dispatch(getGeolocationAction(data.latitude, data.longitude))
            )
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (location.pathname === "/" && loading) {
            // setShowHome(false);
            fetchDefaultCity();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <>
            <Col
                lg={8}
                className={
                    isTabletOrMobile && !loading
                        ? `homeMobileComponent ${switchGradient(
                              actualCity.list[0].weather[0].icon
                          )}`
                        : ""
                }
            >
                {isTabletOrMobile && ( //mostra mininavbar con pulsanti indietro e home, solo quando siamo sotto i 768px
                    <Row>
                        <MiniTopNavbar navigate={"favourites"} />
                    </Row>
                )}
                <Row style={{ justifyContent: "center" }}>
                    {!loading ? (
                        <>
                            <Col xs={11} md={12}>
                                <MainWeatherCard actualCity={actualCity} />
                            </Col>
                            <Col xs={11} md={5}>
                                <TodayComponent actualCity={actualCity} />
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
        </>
    );
};

export default HomeComponent;
