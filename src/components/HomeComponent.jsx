import { Col, Row } from "react-bootstrap";
import MainWeatherCard from "./MainWeatherCard";
import ThisWeekMonthComponent from "./ThisWeekMonthComponent";
import TodayComponent from "./TodayComponent";

const HomeComponent = () => {
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
