import { Col, Row } from "react-bootstrap";

const MonthDetailsAverage = ({ month }) => {
    return (
        <Row className="mainGradient shadowCornersSecondary">
            <Col xs={5}>
                <p>Averages</p>
                {/* <img
                    className="d-block w-100"
                    src={`http://openweathermap.org/img/wn/${month.icon}@2x.png`}
                    alt="weather logo"
                /> */}
            </Col>
            <Col xs={7}>
                <Row>
                    <p className="tempFont">{month.temperature}°</p>
                    <p>Wind speed: {month.windSpeed} km/h</p>
                    <p>
                        The highs will be {month.highs}°C, the lows will be{" "}
                        {month.lows}°C.
                    </p>
                    <br />
                    <p>Humidity: {month.humidity}%</p>
                </Row>
            </Col>
        </Row>
    );
};

export default MonthDetailsAverage;
