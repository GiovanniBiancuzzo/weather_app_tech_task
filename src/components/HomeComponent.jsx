import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getActualWeatherAction } from "../redux/actions";
import ButtonGeolocation from "./ButtonGeolocation";
import FavouritesCitiesComponent from "./FavouritesCitiesComponent";
import FormSearch from "./FormSearch";
import MainWeatherCard from "./MainWeatherCard";
import ThisWeekMonthComponent from "./ThisWeekMonthComponent";
import TodayComponent from "./TodayComponent";
import { BsArrowLeft, BsPlusSquare } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const HomeComponent = () => {
    const defaultCity = useSelector((state) => state.favourites?.list[0]);
    const dispatch = useDispatch();
    useEffect(() => {
        //al caricamento dei componenti, se esiste almeno una città preferita salvata nel redux, la carico

        if (defaultCity) {
            dispatch(getActualWeatherAction(defaultCity));
        }
        // else {
        // }
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

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        if (params === "searched") {
            setShow(true);
            location.pathname = "/";
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Row className={isTabletOrMobile ? "mainGradient" : ""}>
                {isTabletOrMobile &&
                    show && ( //mostra pulsanti indietro e home, solo quando siamo sotto i 768px e quando la variabile show è true
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
                                    fontSize: "1.1em",
                                }}
                                onClick={showHome}
                            />

                            <BsPlusSquare
                                style={{
                                    cursor: "pointer",
                                    fontSize: "1.5em",
                                }}
                                onClick={() => navigate("/search")}
                            />
                        </div>
                    )}
                {(isDesktopOrLaptop || show) && ( //mostra la home, solo quando siamo sopra i 768px o quando la variabile show è true
                    <Col lg={8}>
                        <Row style={{ justifyContent: "center" }}>
                            <Col xs={11} md={12}>
                                <MainWeatherCard />
                            </Col>
                            <Col xs={11} md={5}>
                                <TodayComponent />
                            </Col>
                            <Col xs={11} md={7}>
                                <ThisWeekMonthComponent />
                            </Col>
                        </Row>
                    </Col>
                )}
                <Col
                    lg={4}
                    style={isTabletOrMobile ? { backgroundColor: "#fff" } : {}}
                >
                    {(isDesktopOrLaptop || (isTabletOrMobile && !show)) && ( //mostra le città preferite, solo quando siamo sopra i 768px o siamo sotto i 768px con variabile show false
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
                            <FavouritesCitiesComponent showHome={showHome} />
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
        </>
    );
};

export default HomeComponent;
