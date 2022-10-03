import { Col, Row } from "react-bootstrap";
import MainWeatherCard from "./MainWeatherCard";
import TodayComponent from "./TodayComponent";

const HomeComponent = () => {
    return (
        <Col xs={12} md={6} lg={9}>
            <Row>
                <MainWeatherCard />
            </Row>
            <Row>
                <Col lg={5}>
                    <TodayComponent />
                </Col>
                {/* <Col lg={7}>
                    <TodayComponent />
                </Col> */}
            </Row>
        </Col>
    );
};

export default HomeComponent;
