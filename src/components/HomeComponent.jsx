import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getActualWeatherAction } from "../redux/actions";
import MainWeatherCard from "./MainWeatherCard";
import ThisWeekMonthComponent from "./ThisWeekMonthComponent";
import TodayComponent from "./TodayComponent";

const HomeComponent = () => {
    const defaultCity = useSelector((state) => state.favourites?.list[0]); //al caricamento dei componenti, se esiste almeno una città preferita salvata nel redux, la carico
    const dispatch = useDispatch();
    if (defaultCity) {
        dispatch(getActualWeatherAction(defaultCity));
    }
    // else {
    // }
    //todo: introdurre una gestione degli errori di caricamento e dei loading

    return (
        <Col xs={12} md={6} lg={8}>
            <Row>
                <MainWeatherCard />
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={8} lg={5}>
                    <TodayComponent />
                </Col>
                <Col xs={8} lg={7}>
                    <ThisWeekMonthComponent />
                </Col>
            </Row>
        </Col>
    );
};

export default HomeComponent;
