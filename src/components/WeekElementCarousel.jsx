import { format } from 'date-fns';
import { Col, Image, Row } from 'react-bootstrap';
import { switchGradient } from '../functions/functions';

const WeekElementCarousel = ({ day }) => {
    return (
        <Row
            className={`weekElement shadowCornersSecondary ${switchGradient(
                day.weather[0].icon
            )}`}
        >
            <Col xs={12}>
                <h6>{format(new Date(day.dt_txt), 'EEEE')}</h6>
            </Col>

            <Col xs={12} className="tempFontSecondary">
                {Math.trunc(day.main.temp)}°
            </Col>

            <Col xs={12}>
                <Image
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="weather logo"
                />
            </Col>
        </Row>
    );
};

export default WeekElementCarousel;
