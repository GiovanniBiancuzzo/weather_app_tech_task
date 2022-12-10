import { Carousel, Col, Row } from 'react-bootstrap';
import WeekElementCarousel from './WeekElementCarousel';

const CarouselComponent = (props) => {
    const actualCityWeek = props.actualCity.list.filter(
        (el, index) => index % 8 === 0
    );
    return (
        <Carousel>
            <Carousel.Item>
                <Row className="threeDayRow">
                    {actualCityWeek.slice(0, 3).map((day) => (
                        <Col xs={4} onClick={() => props.handleDay(day)}>
                            <WeekElementCarousel day={day} key={day.dt} />
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className="threeDayRow">
                    {actualCityWeek.slice(3, 6).map((day) => (
                        <Col xs={4} onClick={() => props.handleDay(day)}>
                            <WeekElementCarousel day={day} key={day.dt} />
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
