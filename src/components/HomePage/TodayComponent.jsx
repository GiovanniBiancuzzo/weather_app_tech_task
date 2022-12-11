import { format } from 'date-fns';
import { Col, Row } from 'react-bootstrap';
import { BsFillCircleFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { switchGradient } from '../../functions/functions';

const TodayComponent = ({ actualCity }) => {
    const actualCityToday = actualCity.list.slice(0, 8); //viste le limitazioni dell'api nella sua versione grauita le informazioni fetchate sono intervallate ogni 3 ore. Per ottenere un ciclo di 24 ore, prenderò i primi 8 oggetti, 3*8=24

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <>
            <h4 className={isTabletOrMobile ? 'themedTitles' : 'titles'}>
                Today
            </h4>
            <Row
                className={
                    isTabletOrMobile
                        ? ''
                        : `${switchGradient(
                              actualCity.list[0].weather[0].icon
                          )} shadowCorners`
                }
            >
                <Col className="todayContainer">
                    {actualCityToday.map((day) => (
                        <Row key={day.dt} className="todayElement">
                            <Col xs={12} md={4}>
                                {Math.trunc(day.main.temp)}°
                            </Col>
                            <Col xs={12} md={4}>
                                <Row>
                                    <BsFillCircleFill />
                                </Row>
                            </Col>
                            <Col xs={12} md={4}>
                                {format(new Date(day.dt_txt), 'p')}
                            </Col>
                        </Row>
                    ))}
                    <div className="solidLine"></div>
                </Col>
            </Row>
        </>
    );
};

export default TodayComponent;
