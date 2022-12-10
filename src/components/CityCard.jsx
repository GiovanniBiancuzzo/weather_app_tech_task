import { Card, Col, Image, Row } from 'react-bootstrap';
import format from 'date-fns/format';
import { switchGradient } from '../functions/functions';
import { setActualCityAction } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CityCard = ({ cityInfo }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setActualCity = (cityInfo) => {
        dispatch(setActualCityAction(cityInfo));
        navigate('/');
    };

    return (
        <Card
            className={`miniCard shadowCorners ${switchGradient(
                cityInfo.list[0].weather[0].icon
            )}`}
            onClick={() => setActualCity(cityInfo)}
        >
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <h4 style={{ fontWeight: '900' }}>
                            {cityInfo.city.name}, {cityInfo.city.country}
                        </h4>
                        <p>
                            {format(
                                new Date(cityInfo.list[0].dt_txt),
                                'EEEE d, LLLL'
                            )}
                        </p>
                        {
                            //meglio la data attuale
                        }
                        <small>{format(new Date(), 'h:mm aaaa')}</small>
                    </Col>
                    <Col xs={4}>
                        <Image
                            fluid
                            src={`https://openweathermap.org/img/wn/${cityInfo.list[0].weather[0].icon}@2x.png`}
                        />
                    </Col>
                    <Col
                        xs={4}
                        className="tempFont"
                        style={{ textAlign: 'center', margin: 'auto 0' }}
                    >
                        {Math.trunc(cityInfo.list[0].main.temp)}°
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CityCard;
