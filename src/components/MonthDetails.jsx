import { format } from 'date-fns';
import { Col, Image, Row } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../functions/functions';
import { switchGradient } from '../functions/functions';

const MonthDetails = ({ day }) => {
    return (
        <Row
            className={`monthWeatherCard shadowCornersSecondary ${switchGradient(
                day.weather[0].icon
            )}`}
        >
            <Col xs={5}>
                <Row style={{ fontWeight: 'bold', padding: '16px 0 0 10px' }}>
                    {format(new Date(day.dt_txt), 'EEEE, d LLLL')}
                </Row>
                {/* <div style={{ width: "100%" }}> */}
                <Row>
                    <Image
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                        alt="weather logo"
                        // fluid
                    />
                </Row>
            </Col>
            <Col xs={7}>
                <Row>
                    <Row style={{ flexWrap: 'nowrap', alignItems: 'center' }}>
                        <Col xs={5} className="tempFontSecondary">
                            {Math.trunc(day.main.temp)}°C
                        </Col>
                        <Col>(Felt: {Math.trunc(day.main.feels_like)}°)</Col>
                    </Row>
                    <p>{capitalizeFirstLetter(day.weather[0].description)}</p>
                    <p>
                        The high will be {Math.trunc(day.main.temp_max)}°C, the
                        low will be {Math.trunc(day.main.temp_min)}°C.
                    </p>
                    <br />
                    <span>Humidity: {day.main.humidity} %</span>
                    <span>Pressure: {day.main.pressure} hPa</span>
                    {/* <span>UV: boh</span>
                    <span>Dew Point: boh °C</span> */}
                </Row>
            </Col>
        </Row>
    );
};

export default MonthDetails;
