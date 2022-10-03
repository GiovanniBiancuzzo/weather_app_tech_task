import { Col } from "react-bootstrap";
import MainWeatherCard from "./MainWeatherCard";

const HomeComponent = () => {
    return (
        <Col xs={12} md={6} lg={9}>
            <MainWeatherCard />
        </Col>
    );
};

export default HomeComponent;
