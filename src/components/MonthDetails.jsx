import { format } from "date-fns";
import { Col, Image, Row } from "react-bootstrap";

const MonthDetails = ({ day }) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <Row className="secondGradient shadowCornersSecondary p-3 weatherCard">
            <Col xs={5}>
                <p className="pt-3">
                    {format(new Date(day.dt_txt), "EEEE, d LLLL")}
                </p>
                <div style={{ width: "100%" }}>
                    <Image
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                        alt="weather logo"
                        fluid
                    />
                </div>
            </Col>
            <Col xs={7}>
                <Row>
                    <p className="tempFont">{Math.trunc(day.main.temp)}°</p>
                    <p>Felt: {Math.trunc(day.main.feels_like)}°</p>
                    <p>{capitalizeFirstLetter(day.weather[0].description)}</p>
                    <p>
                        The high will be {Math.trunc(day.main.temp_max)}°C, the
                        low will be {Math.trunc(day.main.temp_min)}°C.
                    </p>
                    <br />
                    <span>Humidity: {day.main.humidity} %</span>
                    <span>Pressure: {day.main.pressure} hPa</span>
                </Row>
            </Col>
        </Row>
    );
};

export default MonthDetails;
